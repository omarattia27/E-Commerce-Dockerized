import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import api from "./api/api.js";
const app = express();

app.use(bodyParser.json({  extended: true }))
app.use(bodyParser.urlencoded({  extended: true }))
app.use(cors());
app.use('/api', api);

const CONNECTION_URL = "mongodb+srv://Omarmohamed2013:Omarmohamed2013@cluster0.0ffel.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT|| 5000;
let server;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>server = app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);