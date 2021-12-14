import axios from 'axios';

//we will use axios to make api calls
const url = 'http://localhost:5000/posts'; //this is the url pointing to our backend route

// remeber http://localhost:5000/posts returns all the posts that we have in the database.
export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);