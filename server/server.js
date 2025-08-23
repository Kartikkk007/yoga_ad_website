const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const http = require('http'); // Import HTTP module
const { Server } = require('socket.io'); // Import Socket.IO Server

const scheduleRoutes = require('./routes/scheduleRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Create HTTP server and wrap the Express app
const server = http.createServer(app);

// Create Socket.IO server and attach it to the HTTP server
const io = new Server(server, {
  cors: {
    origin: '*', // Allow all origins for development
    methods: ['GET', 'POST', 'PUT'],
  },
});

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected Successfully!'))
.catch(err => console.error('MongoDB connection error:', err));

// Pass the Socket.IO instance to your routes
app.use('/api/schedule', scheduleRoutes(io));

// Start the HTTP server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
