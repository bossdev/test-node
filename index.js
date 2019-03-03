const express = require('express');
const app = express();
const dotenv = require('dotenv');
const routeBlog = require('./routes/blog');
const helper = require('./helper');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(routeBlog);
app.listen(process.env.PORT,()=>{
    mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser: true });
    var db = mongoose.connection;
    db.on('error', (err)=>{
        console.log(err)
        console.log('Cannot connect mongodb')
        process.exit(1);
    });
    db.once('open', function() {
        console.log('\x1b[36m%s\x1b[0m','Service run at port '+process.env.PORT);
    });
})
app.use(function(req, res, next){
    res.status(404);
    // respond with json
    if (req.accepts('json')) {
        response = helper.responseStatus(res.statusCode,'404 not found');
        res.send(response);
        return;
    }
    res.send("404 not found");
});