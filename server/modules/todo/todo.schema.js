const Joi = require('joi');

exports.addTodo = {
    body: {
        task: Joi.string().required(),
        completedAt: Joi.string()
    },
}

exports.getTodo = {
    params: {
        markerId: Joi.string().required(),
    }
}

exports.updateTodo = {
    body: {
        task: Joi.string(),
        completedAt: Joi.any()
    },
}

exports.deleteTodo = {
    params: {
        todoId: Joi.string().required(),
    }
}