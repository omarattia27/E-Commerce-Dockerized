import jwt from 'jsonwebtoken';

export const verify = (req, res, next) => {
    const {token} = req.body;
    if (!token) return res.status(400).send('Authorization problem');

    try {
        const decoded = jwt.verify(token, "Key");
        console.log("Yaaaaay!",decoded);
        req.body.user = decoded.user;
        next();
    } catch (e) {
        res.status(400).send("Yout token is either expired or invalid", e.message);
    }
}