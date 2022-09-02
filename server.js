import  express  from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv"
import mongoose from "mongoose";
import productRouter from "./routes/productsRoutes.js";
// require('colors');

dotenv.config();

// connect with mongoDB
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("connected to DB");
}).catch((err)=>{
    console.log(err.message);
});



const app = express();
// middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan("dev"));

// routes 

app.use('/api/products/', productRouter);

// app.get("/",(req, res)=>{
//     res.send("point of sale")
// })

// port 
const PORT = process.env.PORT || 5000


// listen 
app.listen(PORT, ()=>{
    console.log(`server is running on the http://localhost:${PORT}`
    // bgYellow.white
    );
})