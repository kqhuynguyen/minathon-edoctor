const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/edoctor');

const faker = require('faker');

const Patient = require('../models/patient');

const numPatients = 20;


// const PatientSchema = new Schema({
//     _id: ObjectId,
//     name: String,
//     phoneNumber: String,
//     health: {
//       weight: Number,
//       height: Number,
//       birthyear: Number,
//       disabilities: [String],
//       diseasesRecord: [String],
//     }
//   });

patients = [];
for (let i = 0; i < numPatients; ++i) {
  patients.push({
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    phoneNumber: faker.phone.phoneNumber(),
    health: {
      weight: faker.random.number({ min: 50, max: 100 }),
      height: faker.random.number({ min: 150, max: 180 }),
      birthyear: faker.random.number({ min: 1950, max: 1970 }),
      disabilities: new Array(faker.random.number({ min: 0, max: 10 })).fill(null).map(e => e = faker.lorem.word()),
      diseasesRecord: new Array(faker.random.number({ min: 0, max: 10 })).fill(null).map(e => e = faker.lorem.word())
    }
  });
}

console.log(patients[0]);
Patient.insertMany(patients, (err, docs) => console.log('Should have used that batch function.'));
