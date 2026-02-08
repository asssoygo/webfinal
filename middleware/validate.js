module.exports = (schema) => {
    return (req, res, next) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false });

    if (error) {
        const messages = error.details.map((d) => d.message);
        const err = new Error(messages.join(", "));
        err.statusCode = 400;
        return next(err);
    }

    req.body = value;
    next();
    };
};
