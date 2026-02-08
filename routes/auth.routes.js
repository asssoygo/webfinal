const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const { registerSchema, loginSchema } = require("../middleware/validationSchemas");
const validate = require("../middleware/validate");
const { checkDuplicateUsernameOrEmail } = require("../middleware/verifySignUp");
router.post(
    "/register",
    validate(registerSchema),
    checkDuplicateUsernameOrEmail,
    authController.register
);

router.post(
    "/login",
    validate(loginSchema),
    authController.login
);

module.exports = router;
