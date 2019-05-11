const express = require('express');
const validate = require('express-validation');
const schema = require('./todo.schema');
const todoCtrl = require('./todo.controller');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
    /** GET /api/todos - Get list of todos */
    .get(todoCtrl.getTodos)

    /** POST /api/todos - Create new todo */
    .post(validate(schema.addTodo), todoCtrl.createTodo);

router.route('/:todoId')
    /** PUT /api/todos/:todoId - Update todo */
    .put(validate(schema.updateTodo), todoCtrl.updateTodo)

router.route('/:todoId')
    /** DELETE /api/todos/:placeId - Delete todo */
    .delete(validate(schema.deleteTodo), todoCtrl.deleteTodo)


module.exports = router;