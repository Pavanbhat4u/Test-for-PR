const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

//Import Routes

const postsRoute = require('./routes/posts');
const testRoute = require('./routes/test');

app.use('/posts', postsRoute);
app.use('/test', testRoute);



//Routes
app.get('/', (req,res) => {
  res.send('We are on Home page')
});





//connect to db  directly 
// mongoose.connect('' , {useNewUrlParser:true}, () => console.log('Connected to Database')
// );

//connect to db
mongoose.connect(process.env.DB_CONNECTION , {useNewUrlParser:true}, 
  () => console.log('Connected to Database')
);



//listen

// app.listen(5000);


const PORT = 5000
app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));