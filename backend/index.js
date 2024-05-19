import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";

const app = express()

app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 4000;
// const URI=process.env.MongoDBURI;
const URI = 'mongodb://127.0.0.1:27017/bookStore'

//connect to mongodb
// try {
//     mongoose.connect(URI,{
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })
//     console.log("Connected to mongoDB");
// } catch (error) {
//     console.log("Error: ",error);
// }

app.use("/book",bookRoute)

app.listen(PORT, () => {
try{
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ",error);
}

    console.log(`Example app listening on port ${PORT}`)
})