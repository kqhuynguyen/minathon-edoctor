const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const FalcutySchema = new Schema({
  _id: ObjectId,
  name: String,
  id: String
});


const Falcuty = mongoose.model('falcuties', FalcutySchema);
module.exports = Falcuty;
