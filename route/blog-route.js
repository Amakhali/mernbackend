const express = require('express');
const blogRouter = express.Router();

const
    { fetchListOfBlogs, addNewBlog, updateABog, deleteABlog }
        = require('../controller/blogcontroller')

blogRouter.get('/',fetchListOfBlogs);
blogRouter.post('/add',addNewBlog);
blogRouter.put('/update/:id',updateABog);
blogRouter.delete('/delete/:id',deleteABlog);

module.exports = blogRouter;