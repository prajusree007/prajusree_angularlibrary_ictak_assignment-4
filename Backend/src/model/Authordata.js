const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology',true);
mongoose.connect('mongodb://localhost:27017/ProductDb',{useNewUrlParser:true});
const Schema = mongoose.Schema;

var NewAuthorSchema = new Schema({
    // _id: String,
    authorID: Number,
    authorname: String,
    genre: String,
    imageUrl : String
});

var Authordata = mongoose.model('author',NewAuthorSchema);
module.exports = Authordata;
