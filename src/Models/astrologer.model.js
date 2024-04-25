const mongoose = require('mongoose');

const astrologerSchema = new mongoose.Schema({
  name:{type:String,required:true},
  rating:{type:Number,required:true}
});

const AstrologerModel = mongoose.model('Astrologer', astrologerSchema);

module.exports = AstrologerModel;
