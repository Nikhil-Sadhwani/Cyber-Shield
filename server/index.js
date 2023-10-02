const express = require('express');
const mongoose = require('mongoose');

// Router
const signupRouter  = require('./routers/signup');
const signinRouter  = require('./routers/signin');
const dictionaryRouter  = require('./routers/dictionary');
const reviewRouter  = require('./routers/review');
const reportRouter = require('./routers/reporting');

require('dotenv').config();

const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors(
    {
        origin: "*",
        credentials: true
    }
));

app.use(express.json());

//Use Routers
app.use("/signup" , signupRouter);
app.use("/signin" , signinRouter);
app.use("/dictionary" , dictionaryRouter);
app.use("/review" , reviewRouter);
app.use("/report" , reportRouter);

//  Connecting MongoDB please enter your mongodb URL here and create collections of name : users , reviews , dictionaries , reports 
mongoose.connect(process.env.MONGODB_URL);

app.listen(PORT , ()=>{
    console.log("Server is running");
});
