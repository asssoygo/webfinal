exports.allowRoles = (...roles) => {
    return (req, res, next) => {
    if (!req.user) {
        const err = new Error("User info not found. Token required");
        err.statusCode = 401;
        return next(err);
    }

    if (!roles.includes(req.user.role)) {
        const err = new Error("Forbidden: insufficient permissions");
        err.statusCode = 403;
        return next(err);
    }

    next();
    };
};
