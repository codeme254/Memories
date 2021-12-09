// all routes related to posts
import express from 'express';
import { getPosts } from '../controllers/posts.js';

const router = express.Router();

//https://localhost:5000/posts
//when someone visits localhost 5000
router.get('/', getPosts)
export default router;