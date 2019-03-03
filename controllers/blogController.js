var Blog = require('../models/blog')
var helper = require('../helper')

exports.list = (req,res)=>{
    var query = Blog.find();
    query.exec()
    .then((data)=>{
        res.status(200).json(data)
    })
    .catch((err)=>{
        res.status(helper.statusCodeError(err.name)).json(res);
    })
}

exports.view = (req,res)=>{
    var blogId = req.params.blogId;
    var query = Blog.findById(blogId)
    query.exec()
    .then((data)=>{
        if(!data){
            res.status(404).json(helper.response(404,'Blog data not found'));
        }else{
            res.status(200).json(data)
        }
    })
    .catch((err)=>{
        console.log(err);
        res.status(helper.statusCodeError(err.name)).json(helper.responseError(err.message));
    })
}

exports.post = (req,res)=>{
    var blog = new Blog(req.body);
    blog.save()
    .then((data)=>{
        res.status(201).json(helper.response(data))
    })
    .catch((err) => {
        res.status(helper.statusCodeError(err.name)).json(helper.responseError(err.errors))
    });
}