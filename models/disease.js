const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const DiseaseSchema = new Schema({
  _id: ObjectId,
  name: String,
  introduce: String,
  symptom: [String],
  falcuty: String,
  falcutyID: [{ type: ObjectId, ref: 'Falcuty' }]
});


const Disease = mongoose.model('Disease', DiseaseSchema);
module.exports = Disease;
