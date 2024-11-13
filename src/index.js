require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const wishRoutes = require('./routes/wish');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Kết nối MongoDB
mongoose.connect(`${process.env.MONGODB_URI}/wedding`, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(() => {
	console.log('Connected to MongoDB');
}).catch(err => {
	console.error('MongoDB connection error:', err);
});

// Routes
app.use('/api', wishRoutes);

// Khởi chạy server
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
