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


const Appointment = mongoose.model('fuck', AppointmentSchema);


Appointment.insertMany([{
    location: "271 Ly Thuong Kiet",
}, {
    location: "270 Ly Thuong Kiet",
}], function(err, docs) {
    if (err) {
        return console.log(err);
    }
    console.log("SUCCESSFUL");
})