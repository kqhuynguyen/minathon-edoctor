

const router = require('koa-router')();
const Doctor = require('../models/doctor');
const Falcuty = require('../models/falcuty');

router.prefix('/doctors');


router.get('/', async (ctx, next) => {
  const doctors = await Doctor.find().populate('falcuty');
  ctx.body = doctors;
});

router.get('/id/:id', async (ctx, next) => {
  const { id } = ctx.params;
  const doctor = await Doctor.findById(id).populate('falcuty');
  ctx.body = doctor;
});


router.get('/who', async (ctx, next) => {
  const keyword = ctx.query.keyword;
  if (!keyword) {
    ctx.throw(400, 'keyword required');
  }
  const regex = new RegExp(keyword, 'i');
  await Doctor.find().or([
    { 'name': regex },
    { 'role': regex },
    { 'introduce': regex },
    { 'workplace': regex },
    { 'experience': regex },
    { 'office_address': regex }
  ]).populate('falcuty')
    .then((docs) => {
      ctx.body = docs;
    })
    .catch((error) => {
      console.log(error);
      ctx.throw(400);
    });
});


router.get('/who/falcuty', async (ctx, next) => {
  const chuyenkhoa = ctx.query.keyword;
  const regex = new RegExp(chuyenkhoa, 'i');
  const falcuties = await Falcuty.find({ name: regex });
  const falcutyIDs = falcuties.map(obj => obj._id);

  const doctors = await Doctor
    .find({ falcuty: { $elemMatch: { $in: falcutyIDs } } })
    .populate('falcuty');

  ctx.body = doctors;
});
router.patch('/schedules/add',async(ctx,next)=>{
  const id_doctor=ctx.query.doctor_id;
  const id_patient=ctx.query.patient_id;
  const date=ctx.query.date;
  const time=ctx.query.time;
  await Doctor.update({_id:id_doctor},{$push:{
    schedules:{
      patient_id: id_patient,
      date: new Date(`${date}T${time}`),
      status: 0
    }
  }},{upsert:true});
});

module.exports = router;
