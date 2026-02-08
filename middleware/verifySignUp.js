const User = require("../models/user.model");

exports.checkDuplicateUsernameOrEmail = async (req, res, next) => {
    const { username, email } = req.body;

    const existingUser = await User.findOne({
    $or: [{ username }, { email }]
    });

    if (existingUser) {
        const err = new Error("Username or email already in use");
        err.statusCode = 400;
    return next(err);
    }

    next();
};
