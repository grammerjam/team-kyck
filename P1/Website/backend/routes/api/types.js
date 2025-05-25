const express = require('express');
const {Video, Thumbnail} = require('../../db/models');
const router = express.Router();
const { Op } = require('sequelize');

router.get('/', async (req, res) => {
    try {
        const { type } = req.params;
        
        let formattedVideos = [];

        // Validate the type parameter
        if (!['movie', 'series', 'bookmarked'].includes(type)) {
            return res.status(400).json({ message: 'Invalid type parameter' });
        }
        
        const videoTypes = {
            movie: 'Movie',
            series: 'TV Series'
        };

        if (type === 'movie' || type === 'series') {
            const videos = await Video.findAll({
                where: {
                    category: videoTypes[type],
                },
                include: [
                    {
                        model: Thumbnail,
                        attributes: ['src']
                    } 
                ],
                order: [['id', 'ASC']]
            });
        // console.log(JSON.stringify(videos, null, 2));

            formattedVideos = videos.map(video => ({
                id: video.id,
                year: video.year,
                category: video.category,
                rating: video.rating,
                isBookmarked: video.isBookmarked,
                title: video.title,
                thumbnailUrl: video.Thumbnails[0] ? video.Thumbnails[0].src : null,
                isTrending: video.isTrending
            }));
        } else if (type === 'bookmarked') {
            const videos = await Video.findAll({
                where: {
                    isBookmarked: true
                },
                include: [
                    {
                        model: Thumbnail,
                        attributes: ['src']
                    } 
                ],
                order: [['id', 'ASC']]
            });

            // Format the response to include only the necessary fields
            formattedVideos = videos.map(video => ({
                id: video.id,
                year: video.year,
                category: video.category,
                rating: video.rating,
                isBookmarked: video.isBookmarked,
                title: video.title,
                thumbnailUrl: video.Thumbnails[0] ? video.Thumbnails[0].src : null,
                isTrending: video.isTrending
            }));
        }

        if (formattedVideos.length === 0) {
            return res.status(404).json({ message: `No ${type} videos found` });
        }
        
        res.status(200);
        // Send the formatted response
        return res.json(formattedVideos);
    } catch (error) {   
        console.error('Error fetching video types:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;