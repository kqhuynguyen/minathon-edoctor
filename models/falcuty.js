const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const FalcutySchema = new Schema({
  _id: ObjectId,
  name:String,
  id:String
});


const Falcuty = mongoose.model('falcuty', FalcutySchema);
module.exports = Falcuty;
