const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const DiseaseSchema = new Schema({
  _id: ObjectId,
  name:String,
  introduce:String,
  symptom:[String],
  falcuty:String,
  falcutyID:[{type:ObjectId,ref:'falcuties'}]
});


const Disease = mongoose.model('diseases', DiseaseSchema);
module.exports = Disease;
