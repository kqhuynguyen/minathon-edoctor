

const router = require('koa-router')();
const Doctor = require('../models/doctor');
const Falcuty = require('../models/falcuty');

router.prefix('/doctors');


router.get('/', async (ctx, next) => {
  await Doctor.find({}, function(err, doctors) {
    ctx.body = doctors;
  });
})

router.get('/id/:id', async (ctx, next) => {
  let id = ctx.params.id;l
  await Doctor.findById(id, function(err, doctor) {
    if (err) {
      console.log(err);
      ctx.throw(400);
    }
    ctx.body = doctor;0
  });
})



router.get('/who', async (ctx, next) => {
  let keyword = ctx.query.keyword;
  if (!keyword) {
    ctx.throw(400, "keyword required");
  }
  let regex = new RegExp(keyword,'i');
  await Doctor.find().or([
    { 'faculty': regex },
    { 'name': regex },
    { 'role': regex },
    { 'introduce': regex },
    { 'workplace': regex },
    { 'experience': regex },
    { 'office_address': regex },
  ])
    .then(docs => {
      ctx.body = docs;
    })
    .catch(error => {
      console.log(err);
      ctx.throw(400);
    })
});


router.get('/who/faculty', async (ctx, next) => {
  let chuyenkhoa = ctx.query.keyword;
  // let regex = new RegExp(keyword,'i');
  
  // const chuyenkhoa=ctx.query.name;
  const regex=new RegExp(chuyenkhoa, 'i');
  let falcuties=null;
  let falcutyID=null;
  falcuties=await Falcuty.find({name: regex})
  falcutyID=await falcuties.map(obj=>obj._id);

    const doctors=await Doctor
            .find({falcuty:{$elemMatch:{$in:falcutyID} }})
            .populate('falcuty');

  ctx.body=doctors;
});

module.exports = router