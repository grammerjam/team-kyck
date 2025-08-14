const express = require('express');
const { User } = require('../../db/models');
const { setTokenCookieSimple } = require('../../utils/auth');

const router = express.Router();

// Sign up
router.post('/', async (req, res) => {
        const { firstName, lastName, email, password, username, test } = req.body;
        const user = await User.create({ firstName, lastName, email, username, password });
        const safeUser = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            username: user.username,
        };

        await setTokenCookieSimple(res, safeUser);

        res.status(201);
        return res.json(safeUser);
        // console.log('First Name', firstName);
        // console.log('Test', test)
        // if (!firstName) {
        //   res.status(400);
        //   return res.json({ message: "No First Name" });
        // }
        // res.status(201);
        // return res.json({ firstName, lastName, email, password, username });
    }
  );

module.exports = router;