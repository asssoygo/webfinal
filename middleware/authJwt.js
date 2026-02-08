const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
        const err = new Error("No token provided");
        err.statusCode = 401;
        return next(err);
    }

    const parts = authHeader.split(" ");

    if (parts.length !== 2 || parts[0] !== "Bearer") {
        const err = new Error("Invalid token format");
        err.statusCode = 401;
        return next(err);
    }

    const token = parts[1];

    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
    if (error) {
        const err = new Error("Unauthorized: invalid or expired token");
        err.statusCode = 401;
        return next(err);
    }

    req.user = {
        id: decoded.id,
        role: decoded.role
    };

    next();
    });
};
