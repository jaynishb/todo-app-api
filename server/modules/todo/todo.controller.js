const Todo = require('./todo.model');

exports.getTodos = async (request, response, next) => {
    try {
        const todos = await Todo.list();
        return response.json(todos);
    } catch (error) {
        return next(error);
    }
}

exports.createTodo = async (request, response, next) => {
    try {
        const todo = new Todo(request.body);
        const todos = await todo.save();
        return response.status(201).json({ todos });
    } catch (error) {
        return next(error);
    }
};

exports.updateTodo = async (request, response, next) => {
    try {
        const { todoId } = request.params;
        const data = request.body;

        const todos = await Todo.findByIdAndUpdate({ _id: todoId }, data, { new: true });
        return response.status(201).json({ todos });
    } catch (error) {
        return next(error);
    }
};

/**
 * Delete todo.
 * @returns {Todo}
 */
exports.deleteTodo = async (request, response, next) => {

    try {
        const { todoId } = request.params;
        await Todo.remove({ _id: todoId });
        response.json({ success: true, message: "Todo deleted successfully!" })
    } catch (error) {
        return next(e);
    }
}