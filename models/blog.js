const mongoose = require('mongoose');
const validators = require('mongoose-validators');
const Schema = mongoose.Schema;
var blogSchema = Schema({
    _id: {
        type: Schema.Types.ObjectId,
        auto: true
    },
    slug2: {
        type: String,
        validate: validators.isEmail()
    },
    slug: {
        type: String,
        trim: true,
        required: true,
        // validate: [validators.isLength({min:3})]
        minlength: 3
    },
    title: {
        type: Object,
        en: {
            type: String,
            trim: true,
            required: true
        },
        th: {
            type: String,
            trim: true,
            required: true
        },
        required: true
    },
    content: {
        type: Object,
        en: {
            type: String,
            trim: true
        },
        th: {
            type: String,
            trim: true
        }
    },
    status: {
        type: String,
        enum: ['publish', 'draft'],
        required: true
    },
    countView: {
        type: Number,
        validate: [validators.isNumeric()]
    },
    isFavourite: {
        type: Boolean
    }
},{
    timestamps: true,
    versionKey: false
});
var Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;