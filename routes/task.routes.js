const express = require("express");
const router = express.Router();
const controller = require("../controllers/task.controller");

// middleware authJwt будет подключён позже
router.post("/", controller.createTask);
router.get("/", controller.getTasks);
router.get("/:id", controller.getTaskById);
router.put("/:id", controller.updateTask);
router.delete("/:id", controller.deleteTask);

module.exports = router;
