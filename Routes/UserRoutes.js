const express = require('express');
const router = express();
const UserController = require("../Controller/UserController")


router.post("/signup", UserController.signup);

router.post("/login", UserController.login);

router.get("/:id",UserController.getUserById);

router.post("/postBlog",UserController.postBlog);

router.get("/getBlog/:id",UserController.getBlog);

module.exports = router;

