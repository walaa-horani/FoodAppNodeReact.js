const express = require('express');

const app = express();  
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use("/", require('./routes/recipe'));
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});