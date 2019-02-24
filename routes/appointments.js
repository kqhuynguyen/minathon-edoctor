const router = require('koa-router')();
const Appointment = require('../models/appointment');
const Falcuty = require('../models/falcuty');
const Disease = require('../models/disease');

router.prefix('/appointments');
// /name=&&disease=&&falcuty=&&location=&&start_price&&end_price
// profile doctor click--> list appointments
// api luu lich lam viec:  tu may gio --> may gio
router.get('/', async (ctx, next) => {
  await Appointment.find({}, (err, appointments) => {
    if (err) {
      return console.log(err);
    }
    ctx.body = appointments;
  });
});

router.post('/', async (ctx, next) => {
  body = ctx.request.body;
  await Appointment.create({  
    start: body.start,
    end: body.end,
    location: body.location,
    patientId: body.patientId,
    doctorId: body.doctorId,
  }, (err, doc) => {
    if (err) {
      console.log(err);
      ctx.throw(400)
    }
    ctx.body = doc;
  });
});


router.get('/bar', (ctx, next) => {
  ctx.body = 'this is a appointments/bar response';
});

module.exports = router;
