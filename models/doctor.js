const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const DoctorSchema = new Schema({
  _id: ObjectId,
  name: String,
  role: [String],
  photo: String,
  faculty: [{type:ObjectId, ref: 'falcuties'}],
  introduce: String,
  workplace: [String],
  experience: [String],
  office_address: [String],
  ratings: {
    num: Number,
    avg: Number,
  },
  feedbacks: [
    {
      patientId: {type: ObjectId, ref: "patients"},
      content: String,
    }
  ]
});



const Doctor = mongoose.model('doctors', DoctorSchema);
module.exports = Doctor;
