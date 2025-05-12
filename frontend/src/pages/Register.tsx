import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../index.css';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import AnimatedHeading from '../components/AnimatedHeading';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Registration successful');
        // Optionally redirect to login
        // window.location.href = '/login';
      } else {
        alert(data.error || 'Registration failed');
      }
    } catch (err) {
      console.error('Error:', err);
      alert('Something went wrong');
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AnimatedHeading
        text="Sign-in"
        className="text-4xl md:text-5xl font-bold mb-6 -mt-20"
        delay={0.2}
      />
      <form
        onSubmit={handleRegister}
        className="flex flex-col gap-4 bg-slate-800 p-8 rounded-xl shadow-lg w-full max-w-sm"
      >
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="p-3 rounded bg-slate-700 text-white placeholder-gray-400 outline-none"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="p-3 rounded bg-slate-700 text-white placeholder-gray-400 outline-none"
          required
        />

        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 pr-10 rounded bg-slate-700 text-white placeholder-gray-400 outline-none"
            required
          />
          <div
            className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition-colors p-3 rounded text-white font-semibold"
        >
          Register
        </button>

        <p className="text-sm text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-400 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </motion.div>
  );
};

export default Register;
