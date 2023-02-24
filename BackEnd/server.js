const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
// add middleware to display data
app.use(express.json());
// 
// routes
app.use("/api/contacts", require("./routes/contactRoutes")); 
//
// middleware
app.use(errorHandler);
// 
app.listen(
    port, () => console.log(`Server running port ${port}!`)
)