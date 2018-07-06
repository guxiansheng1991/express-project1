let mongoose = require('../conn');
mongoose.Promise = global.Promise;
let imagesSchema = new mongoose.Schema({
  id: Number,
  imageName: String,
  imageUrl: String,
  imageSize: Number,    // 0(小), 1(中), 2(大)
});

let imagesModel = mongoose.model('images', imagesSchema);

module.exports = imagesModel;