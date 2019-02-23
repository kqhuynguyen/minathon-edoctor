const router = require('koa-router')()
const Appointment = require('../models/appointment');


router.prefix('/appointments')

router.get('/', async (ctx, next) => {
    await Appointment.find({}, function(err, appointments) {
    if (err) {
        return console.log(err);
    }
      ctx.body = appointments;
    });
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a appointments/bar response'
})

module.exports = router
