const express = require('express');
const { Op } = require('sequelize');
const { User } = require('../../db/models');
const { setTokenCookieSimple } = require('../../utils/auth');

const router = express.Router();

// Log in
router.post('/', async (req, res, next) => {
      const { email, password } = req.body;
  
      const user = await User.unscoped().findOne({
        where: {
          [Op.or]: {
            email: email
          }
        }
      });
  
      if (!user || password !== user.password) {
        const err = new Error('Email or Password Incorrect');
        err.status = 401;
        return next(err);
      }
  
      const safeUser = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        username: user.username,
      };

      await setTokenCookieSimple(res, safeUser);
  
      return res.json(safeUser);
    }
);

// Log out
router.delete('/', (_req, res) => {
        res.clearCookie('userToken');
        return res.json({ message: 'success' });
    }
);

//Restore User
router.get('/', (req, res) => {
  const { user } = req;
  if (user) {
    const safeUser = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      username: user.username,
    };
    
    return res.json({user: safeUser});
  } else return res.json({ user: null });
}
);

module.exports = router;