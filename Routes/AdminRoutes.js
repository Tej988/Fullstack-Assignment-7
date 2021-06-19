const express = require('express');
const router = express();
const AdminController = require("../Controller/AdminController");

router.post("/adminsignup", AdminController.signup);
router.post("/adminlogin",AdminController.login)

module.exports = router;