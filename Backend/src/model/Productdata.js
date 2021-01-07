const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology',true);
mongoose.connect('mongodb://localhost:27017/ProductDb',{useNewUrlParser:true});
const Schema = mongoose.Schema;

var NewProductSchema = new Schema({
    // _id: String,
    bookID: Number,
    book: String,
    author: String,
    genre: String,
    imageUrl : String
});

var Productdata = mongoose.model('product',NewProductSchema);
module.exports = Productdata;
