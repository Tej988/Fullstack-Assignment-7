const express = require('express');
const router = express();
const UserController = require("../Controller/UserController");
const BlogController = require("../Controller/BlogController");


router.post("/signup", UserController.signup);

router.post("/login", UserController.login);

router.get("/:id",UserController.getUserById);

router.post("/postBlog",BlogController.postBlog);

router.get("/getBlog/:id",BlogController.getBlog);

module.exports = router;

