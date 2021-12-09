//here we are majorly utilising mongoose
import mongoose from 'mongoose';

// creating a mongoose schema
// what is a schema? in mongodb, we can create documents that look absolutely different
// one can have a title and a message, one can only have a message and so on, mongoose allows us to
// give some sort of uniformity to our documents
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String], //an array of strings
    selectedFile: String, //we will convert an image into a string with react base 64
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

//now that we have a schema we are going to turn it into a model
//what is a model--a model is a compiled version of a schema, one instance of a model will map to one
//document in the database, it is the model that handles CRUD of documents
const PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;