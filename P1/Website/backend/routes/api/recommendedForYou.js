const express = require('express');
const {Video, Thumbnail} = require('../../db/models');
const router = express.Router();
const { Op } = require('sequelize');

// Get recommended videos for a user
router.get('/', async (req, res) => {
    try {
        
    }
    catch (error) {
        console.error('Error fetching recommended videos:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
    // Send the formatted response
    return res.json(formattedVideos);
}
)