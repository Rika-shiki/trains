import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import AnimatedHeading from '../components/AnimatedHeading';
import axios from 'axios';

interface LoginResponse {
  message: string;
  token: string;
  user: {
    fullName: string;
    email: string;
  };
}



const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const response = await axios.post<LoginResponse>('http://localhost:3000/api/auth/login', {
        email,
        password,
      });

      const { token, user } = response.data;
      if (token) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/');
      } else {
        setErrorMessage('Token not received. Please try again.');
      }
    } catch (err: unknown) {
      if ((err as any).isAxiosError) {
        const axiosError = err as any;
        setErrorMessage(axiosError.response?.data?.error || 'Login failed. Please check credentials.');
      } else {
        setErrorMessage('An unexpected error occurred. Try again later.');
      }
    }
  }; 

  return (
    <div className="noob">
      <motion.div
        className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <AnimatedHeading
          text="Log-in"
          className="text-4xl md:text-5xl font-bold mb-6 -mt-20"
          delay={0.2}
        />
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-4 bg-slate-800 p-8 rounded-xl shadow-lg w-full max-w-sm"
        >
          <input
            className="p-3 rounded bg-slate-700 text-white placeholder-gray-400 outline-none"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="relative">
            <input
              className="w-full p-3 pr-10 rounded bg-slate-700 text-white placeholder-gray-400 outline-none"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div
              className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
            </div>
          </div>

          {errorMessage && (
            <p className="text-red-500 text-sm text-center">{errorMessage}</p>
          )}

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition-colors p-3 rounded text-white font-semibold"
          >
            Login
          </button>
          <p className="text-sm text-center">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-400 hover:underline">
              Signup
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
