let mongoose = require('../conn');
let userSchema = new mongoose.Schema({
  id: Number,
  username: String,
  userAge: Number,
  userGender: Number,       // 0(女) 1(男)
});

let userModel = mongoose.model('users', userSchema);

module.exports = userModel;