const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const PatientSchema = new Schema({
  _id: ObjectId,
  name: String,
  phoneNumber: String,
  health: {
    weight: Number,
    height: Number,
    birthyear: Number,
    disabilities: [String],
    diseasesRecord: [String],
  }
});


const Patient = mongoose.model('patient', PatientSchema);
module.exports = Patient;
