import express from 'express'
import mongoose from 'mongoose';
const app = express();
import bodyParser from "body-parser";
import cors from 'cors';

mongoose.connect("mongodb://localhost/students_db", 
{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Connected')
}).catch(err=>{
    console.log(err);
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
import StudentRoutes from './routes/StudentRoutes.js';

app.use("/students",StudentRoutes);

app.get("/", (req, res) => {
    res.send("APP IS RUNNING.")
})

const port = process.env.PORT||5000

app.listen(port, ()=> console.log(`server is running on port http://localhost:${port}`))
