const dotenv = require('dotenv');
dotenv.config();
const express = require('express'); 
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);
const User = require('./models/user.model');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); 

// create a GET route
app.get('/api/hello', (req, res) => { 
  res.send({message:'hello world'})
}); 

// create a GET route
app.post('/api/register', async(req, res) => { 
  console.log(req.body.name)
  console.log(req.body.password)
  console.log(req.body.email)
  try
  {
    const user = await User.create({
      name : req.body.name,
      email : req.body.email,
      password : req.body.password
    });
    res.json({status: 'ok'});
  }
  catch (err)
  {
    console.log(err);
  }
}); 