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

router.get('/bar', (ctx, next) => {
  ctx.body = 'this is a appointments/bar response';
});

module.exports = router;
