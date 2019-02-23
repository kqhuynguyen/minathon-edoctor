const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const AppointmentSchema = new Schema({
  doctorId: ObjectId,
  patientId: ObjectId,
  start: Date,
  end: Date,
  location: String
});


const Appointment = mongoose.model('Appointment', AppointmentSchema);
module.exports = Appointment;
