const Joi = require("joi");

const registerSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().valid("user", "admin", "premium").optional()
});

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
});

const taskSchema = Joi.object({
    title: Joi.string().min(1).required(),
    description: Joi.string().allow("", null),
    status: Joi.string().valid("todo", "in-progress", "done").optional(),
    dueDate: Joi.date().optional()
});

module.exports = {
    registerSchema,
    loginSchema,
    taskSchema
};
