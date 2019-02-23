

const router = require('koa-router')();
const patient = require('../models/patient');

router.prefix('/patients')


router.get('/', async (ctx, next) => {
  await patient.find({}, function(err, patients) {
    ctx.body = patients;
  });
})

router.get('/id/:id', async (ctx, next) => {
  let id = ctx.params.id;
  await patient.findById(id, function(err, patient) {
    if (err) {
      console.log(err);
      ctx.throw(400);
    }
    ctx.body = patient;
  });
})

router.get('/who', async (ctx, next) => {
  let keyword = ctx.query.keyword;
  let regex = new RegExp(keyword,'i');
  await patient.find().or([
    { 'name': regex },
    { 'health.height': regex },
    { 'health.weight': regex },
    { 'health.birthyear': regex }, 
    { 'health.disabilities': regex },
    { 'health.diseasesRecord': regex }
  ])
    .then(docs => {
      
      ctx.body = docs;
    })
    .catch(error => {
      console.log(err);
      ctx.throw(400);
    })
});

module.exports = router