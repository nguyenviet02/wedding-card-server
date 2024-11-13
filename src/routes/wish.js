const express = require('express');
const router = express.Router();
const Wish = require('../models/Wish');

// POST - Lưu dữ liệu từ form
router.post('/wish', async (req, res) => {
	const { name, wish, willJoin } = req.body;

	try {
		const newWish = new Wish({ name, wish, willJoin });
		const savedWish = await newWish.save();
		res.status(201).json(savedWish);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

// GET - Lấy toàn bộ dữ liệu
router.get('/wishes', async (req, res) => {
	try {
		const wishes = await Wish.find();
		res.json(wishes);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

module.exports = router;
