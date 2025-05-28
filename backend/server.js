const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const contactRoutes = require('./routes/contactRoutes');

dotenv.config();
const app = express();

//Middleware
app.use(cors());
app.use(express.json());

// Connect to DB
connectDB();

app.get('/', (req,res)=>{res.send("Wroking properly")})

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
