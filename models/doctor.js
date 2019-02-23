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
  ratings: {
    num: Number,
    avg: Number,
  },
  feedbacks: [
    {
      patientId: {type: Schema.Types.ObjectId, ref: "patient"},
      content: String,
    }
  ]
});


DoctorSchema.virtual('keys',
  {
    ref:'falcuty',
    localField:'falcuty',
    foreignField:'falcutyID',
    justOne:true
  }
)
DoctorSchema.set('toObject', { virtuals: true });
const Doctor = mongoose.model('doctor', DoctorSchema);
module.exports = Doctor;
