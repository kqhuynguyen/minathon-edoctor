const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/edoctor');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const AppointmentSchema = new Schema({
    doctorId: ObjectId,
    patientId: ObjectId,
    start: Date,
    end: Date,
    location: String,
});


const Appointment = mongoose.model('appointment', AppointmentSchema,'appointment');
module.exports = Appointment;
