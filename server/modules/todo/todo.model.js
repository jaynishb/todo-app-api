const mongoose = require('mongoose');
var Promise = require("bluebird");
const APIError = require('../../helpers/APIError');

/**
 * Todo Schema
 */
const TodoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
    completedAt: {
        type: Date,
        required: false,
    },
    
    createdAt: {
        type: Date,
        default: Date.now
    }
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
TodoSchema.method({

});

/**
 * Statics
 */
TodoSchema.statics = {
    /**
     * Get todo
     * @param {ObjectId} id - The objectId of todo.
     * @returns {Promise<Todo, APIError>}
     */
    get(id) {
        return this.findById(id)
            .exec()
            .then((todo) => {
                if (todo) {
                    return todo;
                }
                return Promise.reject(err);
            });
    },

    /**
     * List todos in descending order of 'createdAt' timestamp.
     * @param {number} skip - Number of todos to be skipped.
     * @param {number} limit - Limit number of todos to be returned.
     * @returns {Promise<Todo[]>}
     */
    list({
        skip = 0,
        limit = 50
    } = {}) {
        return this.find()
            .sort({
                completedAt: 1,
                createdAt: -1,
            })
            .skip(+skip)
            .limit(+limit)
            .exec();
    }
};

/**
 * @typedef Todo
 */
module.exports = mongoose.model('Todo', TodoSchema);
