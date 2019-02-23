const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const AppointmentSchema = new Schema({
    doctorId: ObjectId,
    patientId: ObjectId,
    start: Date,
    end: Date,
    location: String,
});


const Appointment = mongoose.model('appointment', AppointmentSchema);
module.exports = Appointment;
