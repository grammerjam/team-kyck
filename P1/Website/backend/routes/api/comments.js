const express = require('express');
const { Comment } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
const router = express.Router();


router.get('/:videoId', async (req, res) => {
        const { videoId } = req.params;

        const comments = await Comment.findAll({
            where: {videoId: videoId}
        });

        const formattedComments = comments.map(comment => ({
            id: comment.id,
            userId: comment.userId,
            videoId: comment.videoId,
            comment: comment.comment,
            rating: comment.rating,
            createdAt: comment.createdAt
        }));    

        res.status(201)
        return res.json(formattedComments);
    }
);

router.post('/:videoId', requireAuth, async (req, res) => {
    const { videoId } = req.params;
    const { comment, rating } = req.body;
    await Comment.create({
        userId: req.user.id,    
        videoId: videoId,
        comment: comment,
        rating: rating
    });

    const comments = await Comment.findAll({
        where: {videoId: videoId}
    });

    const formattedComments = comments.map(comment => ({
        id: comment.id,
        userId: comment.userId,
        videoId: comment.videoId,
        comment: comment.comment,
        rating: comment.rating,
        createdAt: comment.createdAt
    }));    

    res.status(201)
    return res.json(formattedComments);
});

router.put('/:commentId', requireAuth, async (req, res) => {
    const { commentId } = req.params;
    const { comment, rating } = req.body;

    const updatedComment = await Comment.findByPk(commentId);

    if (!updatedComment) {
        res.status(404);
        return res.json({ message: "Comment not found" });
    }

    if (updatedComment.userId !== req.user.id) {
        res.status(403);
        return res.json({ message: "Forbidden" });
    }

    updatedComment.set({comment, rating});
    await updatedComment.save();

    res.status(200);
    return res.json(updatedComment);
});

router.delete('/:commentId', requireAuth, async (req, res) => {
    const { commentId } = req.params;

    const deletedComment = await Comment.findByPk(commentId);

    if (!deletedComment) {
        res.status(404);
        return res.json({ message: "Comment not found" });
    }

    if (deletedComment.userId !== req.user.id) {
        res.status(403);
        return res.json({ message: "Forbidden" });
    }

    await deletedComment.destroy();

    res.status(200);
    return res.json({ message: "Comment deleted" });
});

module.exports = router;