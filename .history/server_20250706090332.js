const express = require('express');

const app = express();  
const dotenv = require('dotenv').config();

const connectDB = require('./config/connectionDB');
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());
const cors = require('cors');
app.use(cors());
app.use("/recipe", require('./routes/recipe'));
app.use("/user", require('./routes/user'));
app.use('/public', express.static('public'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});