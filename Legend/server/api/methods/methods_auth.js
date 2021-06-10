import Register from '../schemas/account.js';
import bcrypt from 'bcrypt';
import express from 'express';

const router = express.Router();
export const login = async (req, res) => {
    let {user, password} = req.body;

    let account = new Register();
    account.password = password;
    account.user = user;

    try {
        let existent_account = await Register.findOne({ user: req.body.user });
        if (!existent_account) return res.status(400).send('username or password is incorrect user');

        const valid = await bcrypt.compare(account.password, existent_account.password);
        if (!valid) return res.status(400).send('username or password is incorrect')

        let token = account.generateAuthToken(); 
        res.status(200).json(token);

    } catch (err) {
        console.log("Error in LogIn");
        res.status(404).json({ message: err.message });
    }
}

export const get_cart = async (req, res) => {
    console.log(req.body.user);
    try {
        let existent_account = await Register.findOne({ user: req.body.user });
        console.log("I was called",existent_account);
        if (!existent_account) return res.status(400).send('username or password is incorrect user');
        res.status(200).json(existent_account.cart);
    } catch (err) {
        console.log("Error in Cart get");
        res.status(404).json({ message: err.message });
    }
}

export const post_cart = async (req, res) => {
    const {cart,user} = req.body;
    console.log("cart: ",cart);

    try {
        console.log("but i was here")
        const existent_account = await Register.findOneAndUpdate({user: user}, {$push: {cart: cart}});
        console.log("i reached this point")
        res.status(200).json(existent_account.cart);
    } catch (err) {
        console.log("Error in Cart post");
        res.status(404).json({ message: err.message });
    }
}

export default router;