

const router = require('koa-router')();
const mongoose = require('mongoose');
const Doctor = require('../models/doctor');

router.prefix('/doctors')

router.get('/', async (ctx, next) => {
  await Doctor.find({}, function(err, doctors) {
    ctx.body = doctors;
  });
})

router.get('/conditions', async (ctx, next) => {
  // big assumption: missing any of these fields won't cause it to crash
  let conditions = {};
  conditions.name = ctx.query.name; 
  conditions.faculty = ctx.query.faculty; // assumption: query is in ctx
  if (!conditions) {
    ctx.throw(400);
  }
  Doctor.find(conditions, function(err, doctors) {
    ctx.body = doctors;
  });
})

router.get('/id/:id', async (ctx, next) => {
  let id = ctx.params.id;
  Doctor.findById(id, function(err, doctor) {
    ctx.body = doctor;
  });
})

module.exports = router