const express = require('express');
const User = require("../Models/UserModel");
const mongoose = require("mongoose");
const Blog = require('../Models/BlogModel');



exports.signup = (req, res) => {
    let { firstName, lastName, email, password, dob } = req.body;
    let user = new User({
        firstName,
        lastName,
        email,
        password,
        dob,
    });
    user
        .save()
        .then(() => res.status(200).send(user))
        .catch((error) => {
            console.error(error);
            return res.status(404).send("ERROR")
        });
};

exports.login = (req, res) => {
    let { email, password } = req.body;
    User.findOne({ email: email })
        .then((user) => {
            if (user) {
                console.info(`user with email ${email} was successfull login`)
                if (password === user.password) {
                    console.info('password is correct')
                    return res.status(200).send(user);
                }
                console.warn('password incorrect')
                return res.status(401).send("password is incorrect")
            }
        })
        .catch((error) => {
            console.error(object)
            return res.status(404).send(`user with email:${email} is dosen't exist!!!`)
        })

}

exports.getUserById = (req, res) => {
    let id = req.params.id;
    id = mongoose.Types.ObjectId(id);
    User.findOne({ _id: id })
        .then((user) => {
            if (user) {
                console.info("User Found");
                return res.status(200).send(user);
            }
            console.error("user was not found");
            return res.status(404).send("Not found ");
        })
        .catch((error) => {
            console.error(eror);
            return res.status(500).send("error")

        });
};

exports.postBlog = (req, res) => {
    let { heading, blog, userId } = req.body;
    let blogC = new Blog({
        heading,
        blog,
        userId,
    });
    blogC
        .save()
        .then(() => res.status(200).send(blogC))
        .catch(() => {
            console.error(error);
            return res.status(404).send("Error")
        })
}

exports.getBlog = (req,res)=>{
    let id = req.params.id;
    id = mongoose.Types.ObjectId(id);
    Blog.findOne({ _id:id})
    .then((blogC) => {
        if (blogC) {
            console.info("Blog found");
            return res.status(200).send(blogC);
        }
        console.error("Blog was not found");
        return res.status(404).send("Not found ");
    })
    .catch((error) => {
        console.error(eror);
        return res.status(500).send("error")

    });
}