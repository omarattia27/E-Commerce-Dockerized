import express from 'express';
import schema from '../schemas/product.js';

const router = express.Router();

export const getAll = async (req, res) => {
    console.log("get request recieved: ",req.body);

    try {
        const post = await schema.find();
        if (!post) rturn(res.status(404).send("No products are available at the moment"))
        res.status(200).json(post);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

export const postProduct = async (req, res) => {
    console.log("get request recieved: ",req.body);

    const {type, Artist, title, Date, price} = req.body;

    const post = new schema({type, Artist, title, Date, price})
    try {
        await post.save();
        res.status(200).json(post);
        console.log("Post Request recieved", post);

    } catch (err) {
        console.log("Error");
        res.status(404).json({ message: err.message });
    }
}

export const SearchSubstring = async (req, res)=>{
    try {
        const post = await schema.find(
            { 
                "title": { "$regex": req.body.substring, "$options": "i" }
            },
            function(err,docs) { 
        });
        if (!post) rturn(res.status(404).send("No products are available at the moment"))
        res.status(200).json(post);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

export default router;