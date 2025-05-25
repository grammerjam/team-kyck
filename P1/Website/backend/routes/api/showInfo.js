const express = require('express');
const {Video, Thumbnail} = require('../../db/models');
const router = express.Router();
const { Op } = require('sequelize');
const { route } = require('./types');

router.get('/id', async (req, res) => {
    const { id } = req.query;
    try {
        const video = await Video.findOne({
            where: {
                id: id
            },
            include: [
                {
                    model: Thumbnail,
                    attributes: ['src']
                } 
            ]
        });

        if (!video) {
            return res.status(404).json({ message: 'Video not found' });
        }

        const formattedVideo = {
            id: video.id,
            year: video.year,
            category: video.category,
            rating: video.rating,
            title: video.title,
            thumbnailUrl: video.Thumbnails[0] ? video.Thumbnails[0].src : null,
        };

        res.status(200);
        return res.json(formattedVideo);
    } catch (error) {
        console.error('Error fetching video:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }

});

module.exports = router;
