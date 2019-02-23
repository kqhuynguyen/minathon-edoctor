const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
<<<<<<< HEAD
 
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
=======

const Patient = new Schema({
  id: ObjectId,
  name: String,
});
>>>>>>> 3aa52dcbf1b61c3d82a794db73e5188fed840877
