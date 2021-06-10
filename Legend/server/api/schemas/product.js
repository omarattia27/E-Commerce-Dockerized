import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    Date: Number,
    Artist: String,
    title: String,
    type: String,
    price: Number,
    img:
    {
        data: Buffer,
        contentType: String
    }
});

var product = mongoose.model('tweetArticle', productSchema);

export default product;