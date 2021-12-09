//contains all the handlers for our routes
import PostMessage from "../models/postMessage.js";
export const getPosts = async (req, res) => {
    try{
        //retrieving all messages, finding something is likely to take time and therefore we need to 
        //make this asynchronous
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}
export const createPost = async (req, res) => {
    //for post requests, we usually have access to the body i.e req.body
    const post = req.body;

    const newPost = new PostMessage(post);
    try{
       await newPost.save();
       res.status(201).json(newPost);
    }
    catch(error){
        res.status(409).json({ message: error.message })
    }
}

/*
  all requests that start with 1** are informational.
  all requests that start with 2** are successful
  all requests that start with 3** are redirectional
  all requests that start with 4** are client error
  all requests that start with 5** are server errors
 */