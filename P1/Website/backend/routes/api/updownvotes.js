const express = require('express');
const { UpDownVote } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
const router = express.Router();


router.get('/:commentId', async (req, res) => {
        const { commentId } = req.params;

        const upDownVotes = await UpDownVote.findAll({
            where: {commentId: commentId}
        });

        const formattedUpDownVotes = upDownVotes.map(upDownVote => ({
            id: upDownVote.id,
            userId: upDownVote.userId,
            commentId: upDownVote.commentId,
            vote: upDownVote.upVote
        }));    

        res.status(200)
        return res.json(formattedUpDownVotes);
    }
);

router.post('/:commentId', requireAuth, async (req, res) => {
    const { commentId } = req.params;
    const { vote } = req.body;

    const upDownVote = await UpDownVote.findOne({
        where: {
            userId: req.user.id,
            commentId: commentId
        }
    }); 

    if (upDownVote) {
        upDownVote.set({upVote: vote});
        await upDownVote.save();
    } else {
        upDownVote = await UpDownVote.create({
            userId: req.user.id,    
            commentId: commentId,
            vote: vote
        });
    }

    const formattedUpDownVote = {
        id: upDownVote.id,
        userId: upDownVote.userId,
        commentId: upDownVote.commentId,
        vote: upDownVote.upVote
    };  

    res.status(201);
    return res.json(formattedUpDownVote);
});

router.delete('/:commentId', requireAuth, async (req, res) => {
    const { commentId } = req.params;

    const upDownVote = await UpDownVote.findOne({
        where: {
            userId: req.user.id,
            commentId: commentId
        }
    });

    if (!upDownVote) {
        res.status(404);
        return res.json({ message: "UpDownVote not found" });
    }

    if (upDownVote.userId !== req.user.id) {
        res.status(403);
        return res.json({ message: "Forbidden" });
    }

    await upDownVote.destroy();

    res.status(200);
    return res.json({ message: "UpDownVote deleted" });
});

module.exports = router;