const router = require('koa-router')()
const Appointment = require('../models/appointment');
const Falcuty=require('../models/falcuty');
const Disease=require('../models/disease');

router.prefix('/appointments')
// /name=&&disease=&&faculty=&&location=&&start_price&&end_price
// profile doctor click--> list appointments
// api luu lich lam viec:  tu may gio --> may gio
router.get('/', async (ctx, next) => {
    await Appointment.find({}, function(err, appointments) {
    if (err) {
        return console.log(err);
    }
      ctx.body = appointments;
    });
});

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a appointments/bar response'
})

module.exports = router
