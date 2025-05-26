const express = require('express');
const {Video, Thumbnail} = require('../../db/models');
const router = express.Router();
const { Op } = require('sequelize');

// Get trending videos
router.get('/', async (req, res) => {
    try {    
        const videos = await Video.findAll({
            where: {
                isTrending: true
            },
            include: [
                {
                    model: Thumbnail,
                    attributes: ['src']
                } 
            ],
            order: [['id', 'ASC']]
        });
        
        // console.log('All videos data:', JSON.stringify(videos, null, 2));

        // Format the response to include only the necessary fields
        const formattedVideos = videos.map(video => ({
            id: video.id,
            year: video.year,
            category: video.category,
            rating: video.rating,
            isBookmarked: video.isBookmarked,
            title: video.title,
            thumbnailUrl: video.Thumbnails[0] ? video.Thumbnails[3].src : null,
            isTrending: video.isTrending
        }));

        if (formattedVideos.length === 0) {
            return res.status(404).json({ message: 'No trending videos found' });
        }
        res.status(200);
        // Send the formatted response
        return res.json(formattedVideos);
    } catch (error) {
        console.error('Error fetching trending videos:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;