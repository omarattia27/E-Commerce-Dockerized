import express from 'express';
import api from "./api/api.js";
const mongoose = require('mongoose');
const Image = require('../models/image')

module.exports = (upload) => {
    const url = "mongodb+srv://Omarmohamed2013:Omarmohamed2013@cluster0.0ffel.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const connect = mongoose.createConnection(url, { useNewUrlParser: true, useUnifiedTopology: true });

    let gfs;

    connect.once('open', () => {
        // initialize stream
        gfs = new mongoose.mongo.GridFSBucket(connect.db, {
            bucketName: "uploads"
        });
    });
}    
