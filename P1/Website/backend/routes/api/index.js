const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const trendingRouter = require('./trending.js');
const recommendationsRouter = require('./recommendedForYou.js');
const typesRouter = require('./types.js');
const showInfoRouter = require('./showInfo.js');

const { restoreUserSimple } = require("../../utils/auth.js");

// Connect restoreUser middleware to the API router
  // If current user session is valid, set req.user to the user in the database
  // If current user session is not valid, set req.user to null
router.use(restoreUserSimple);

//Set Routers
router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/trending', trendingRouter);
router.use('/recommendedForYou', recommendationsRouter);
router.use('/types', typesRouter);
router.use('/showInfo', showInfoRouter);

module.exports = router;