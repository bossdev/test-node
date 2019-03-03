const express = require('express');
const app = express();

const controllers = require('../controllers/blogController'); 

app.route('/blog')
    .get(controllers.list)
    .post(controllers.post)
app.route('/blog/:blogId')
    .get(controllers.view)
module.exports = app