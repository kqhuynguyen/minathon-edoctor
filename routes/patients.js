

const router = require('koa-router')();
const patient = require('../models/patient');

router.prefix('/patients');


router.get('/', async (ctx, next) => {
  await patient.find({}, (err, patients) => {
    ctx.body = patients;
  });
});

router.get('/id/:id', async (ctx, next) => {
  const id = ctx.params.id;
  await patient.findById(id, (err, patient) => {
    if (err) {
      console.log(err);
      ctx.throw(400);
    }
    ctx.body = patient;
  });
});

router.get('/who', async (ctx, next) => {
  const keyword = ctx.query.keyword;
  const regex = new RegExp(keyword, 'i');
  await patient.find().or([
    { 'name': regex },
    { 'health.height': regex },
    { 'health.weight': regex },
    { 'health.birthyear': regex },
    { 'health.disabilities': regex },
    { 'health.diseasesRecord': regex }
  ])
    .then((docs) => {
      ctx.body = docs;
    })
    .catch((err) => {
      console.log(err);
      ctx.throw(400);
    });
});

module.exports = router;
