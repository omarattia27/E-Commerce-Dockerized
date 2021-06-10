import express from 'express';
import { getAll } from './methods/productMethods.js';
import {login, get_cart, post_cart} from './methods/methods_auth.js';
import {createAcount} from './methods/AccountMethods.js';
import {postProduct} from './methods/productMethods.js';
import {SearchSubstring} from './methods/productMethods.js';
import { verify } from './verifyToken.js';

const user = express.Router();

user.post('/login', login);
user.post('/register', createAcount);
user.get('/', getAll);
user.post('/', postProduct);
user.post('/search', SearchSubstring);
user.post('/cartpost', post_cart);
user.post('/cart', get_cart);

export default user;