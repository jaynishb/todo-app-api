const express = require('express');
const todoRoutes = require('./server/modules/todo/todo.route');

const router = express.Router(); // eslint-disable-line new-cap

// TODO: use glob to match *.route files

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount todo routes at /todo
router.use('/todo', todoRoutes);   

module.exports = router;
