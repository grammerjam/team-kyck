const express = require('express');
const { Review } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
const router = express.Router();


router.get('/:videoId', async (req, res) => {
        const { videoId } = req.params;

        const reviews = await Review.findAll({
            where: {
                videoId: videoId
            }
        });

        const formattedReviews = reviews.map(review => ({
            id: review.id,
            userId: review.userId,
            videoId: review.videoId,
            review: review.review
        }));    

        res.status(200)
        return res.json(formattedReviews);
    }
);

router.post('/:videoId', requireAuth, async (req, res) => {
    const { videoId } = req.params;
    const { review } = req.body;
    const videoReview = await Review.findOne({
        where: {
            userId: req.user.id,
            videoId: videoId
        }
    });

    if (videoReview) {
        videoReview.set({review: review});
        await videoReview.save();
    } else {            
        videoReview = await Review.create({
            userId: req.user.id,
            videoId: videoId,
            review: review
        });                 
    }

    const formattedReview = {
        id: videoReview.id,
        userId: videoReview.userId,
        videoId: videoReview.videoId,
        review: videoReview.review
    };

    res.status(201);
    return res.json(formattedReview);
}); 

router.delete('/:videoId', requireAuth, async (req, res) => {
    const { videoId } = req.params;

    const review = await Review.findOne({
        where: {
            userId: req.user.id,
            videoId: videoId
        }
    });

    if (!review) {
        res.status(404);
        return res.json({ message: "Review not found" });
    }

    if (review.userId !== req.user.id) {
        res.status(403);
        return res.json({ message: "Forbidden" });
    }

    await review.destroy();

    res.status(200);
    return res.json({ message: "Review deleted" });
});

module.exports = router;