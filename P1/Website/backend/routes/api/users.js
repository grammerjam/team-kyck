const express = require('express');
const { User } = require('../../db/models');

const router = express.Router();

// Sign up
router.post('/', async (req, res) => {
        const { firstName, lastName, email, password, username } = req.body;
        const user = await User.create({ firstName, lastName, email, username, password });
        const safeUser = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            username: user.username,
        };

        res.status(201);
        return res.json(safeUser);
    }
  );

module.exports = router;