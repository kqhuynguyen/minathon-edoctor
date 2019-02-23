const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/edoctor');

const faker = require('faker');

const Doctor = require('../models/doctor');

let numDoctors = 20;
  
doctors = [];
for (let i = 0; i < numDoctors; ++i) {
    doctors.push({
        "name": faker.name.firstName() + " " + faker.name.lastName(),
        "role": new Array(faker.random.number({min: 0, max: 10})).fill(null).map(e => e =  faker.lorem.words(3)),
        "photo": faker.image.imageUrl(),
        "falcuty": new Array(faker.random.number({min: 0, max: 5})).fill(null).map(e => e =  faker.lorem.words(3)),
        "introduce": faker.lorem.text(),
        "workplace": new Array(faker.random.number({min: 0, max: 3})).fill(null).map(e => e =  faker.lorem.words(3)),
        "experience": new Array(faker.random.number({min: 0, max: 5})).fill(null).map(e => e =  faker.lorem.words(3)),
        "office_address": new Array(faker.random.number({min: 0, max: 3})).fill(null).map(e => e =  faker.lorem.words(3)),
    });
}

console.log(doctors[0]);
Doctor.insertMany(doctors, function(err, docs) {
    console.log("Should have used that batch function.");
    process.exit(0);
});