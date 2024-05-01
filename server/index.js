const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRouter = require('./routes/authRoute.js');
const app = express();

// MIDDLEWARE HERE
app.use(cors());
app.use(express.json());


// ROUTE HERE
app.use('/api/auth', authRouter);

// MONGO DB CONNECTION HERE
mongoose
    .connect('mongodb://127.0.0.1:27017/mernlogin1')
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error("Failed to connect to MongoDB:", error));

// GLOBAL ERROR HANDLER HERE
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    })
})

// SERVER HERE

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
})