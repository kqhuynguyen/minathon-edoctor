const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const DoctorSchema = new Schema({
  _id: ObjectId,
  name: String,
  role: [String],
  photo: String,
  faculty: [String],
  introduce: String,
  workplace: [String],
  experience: [String],
  office_address: [String],
});


const Doctor = mongoose.model('doctor', DoctorSchema);
module.exports = Doctor;