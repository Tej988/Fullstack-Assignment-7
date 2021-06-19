const mongoose = require('mongoose');
const Blog = require('../Models/BlogModel')
 
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