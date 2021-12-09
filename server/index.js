import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes)

//setting up our body parser so that we can properly send our requests
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
// limit 30mb because we will be sending some images which will be large in size

app.use(cors())

//connecting our server application with a real database
//https://www.mongodb.com/cloud/atlas
//there, I will create a CLUSTER  which is going to be the cloud database

//mongodb+srv://ZaphDeveloper:<password>@cluster0.f71pa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const CONNECTION_URL = 'mongodb+srv://ZaphDeveloper:zaphdeveloper456@cluster0.f71pa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
//THE CONNECTION URL SHOULD BE SECURED HOWEVER, LATER THIS WILL BE STORED IN AN ENVIRONMENT VARIABLE

//we now create the port
const PORT = process.env.PORT || 5000;
//WHEN THE PROJECT IS PUSHED SAY TO HEROKU, HEROKU WILL POPULATE THE ENVIRONMENT VARIABLE CALLED PORT
//BUT FOR NOW, WE WILL USE 5000

//CONNECTING MONGOOSE TO THE DATABASE
// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
// .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
// .catch(err => console.log(err.message));

// I use this line of code to listen to the server when am not connected to the internet why?
//mongoose.connect().then(serverListening).catch()  is a promise that will only run the server
//if and only if we are connected to the online database
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
// mongoose.set('useFindAndModify', false)

