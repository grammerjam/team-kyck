// backend/utils/auth.js
const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../config');
const { User } = require('../db/models');

const { secret, expiresIn } = jwtConfig;

// Sends a JWT Cookie
const setTokenCookie = (res, user) => {
    // Create the token.
    const safeUser = {
      id: user.id,
      email: user.email,
      username: user.username,
    };
    const token = jwt.sign(
      { data: safeUser },
      secret,
      { expiresIn: parseInt(expiresIn) } // 604,800 seconds = 1 week
    );

    console.log(token);
  
    const isProduction = process.env.NODE_ENV === "production";
  
    // Set the token cookie
    res.cookie('token', safeUser, {
      maxAge: expiresIn * 1000, // maxAge in milliseconds
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction && "Lax"
    });
  
    return token;
};

const setTokenCookieSimple = (res, user) => {
  // Create the token.
  const safeUser = {
    id: user.id,
    email: user.email,
    username: user.username,
  };

  const isProduction = process.env.NODE_ENV === "production";

  // Set the token cookie
  res.cookie('userToken', safeUser, {
    maxAge: 604800 * 1000, // maxAge in milliseconds
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction && "Lax"
  });

  return safeUser;
};

const restoreUser = async (req, res, next) => {
  // Use optional chaining to prevent errors if cookies is undefined
  const token = req.cookies?.token;
  
  if (!token) {
    return next(); // No token, continue without authenticating
  }
  
  req.user = null;

  return jwt.verify(token, secret, null, async (err, jwtPayload) => {
    if (err) {
      return next();
    }

    try {
      const { id } = jwtPayload.data;
      req.user = await User.findByPk(id, {
        attributes: {
          include: ['email', 'createdAt', 'updatedAt']
        }
      });
    } catch (e) {
      res.clearCookie('token');
      return next();
    }

    if (!req.user) res.clearCookie('token');

    return next();
  });
};

const restoreUserSimple = async (req, res, next) => {
  // Use optional chaining to prevent errors if cookies is undefined
  const userToken = req.cookies?.userToken;
  
  if (!userToken) {
    return next(); // No token, continue without authenticating
  }
  
  const { id } = userToken;
  req.user = await User.findByPk(id, {
    attributes: {
      include: ['email', 'createdAt', 'updatedAt']
    }
  });

  return next();
};

// If there is no current user, return an error
const requireAuth = function (req, _res, next) {
    if (req.user) return next();

    const err = new Error('Authentication required');
    err.status = 401;
    return next(err);
}

module.exports = { setTokenCookie, setTokenCookieSimple, restoreUser, restoreUserSimple, requireAuth };