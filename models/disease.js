const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const DiseaseSchema = new Schema({
  _id: ObjectId,
  name:String,
  introduce:String,
  symptom:[String],
  falcuty:String,
  falcutyID:String
});


const Disease = mongoose.model('disease', DiseaseSchema);
module.exports = Disease;
