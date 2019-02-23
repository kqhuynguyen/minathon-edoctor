const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Patient = new Schema({
  id: ObjectId,
  name: String,
});
