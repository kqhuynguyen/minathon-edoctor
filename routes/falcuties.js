

const router = require('koa-router')();
const mongoose = require('mongoose');
const Doctor = require('../models/doctor');
const Disease=require('../models/disease');
const Falcuty=require('../models/falcuty');
router.prefix('/falcuties')


//tim theo trieu chung
router.get('/', async (ctx, next) => {
  await Falcuty.find({}, function(err, falcuties) {
    ctx.body = falcuties;
  });
  // const chuyenkhoa=ctx.query.name;
  // const regex=new RegExp(chuyenkhoa, 'i');
  // let falcuties=null;
  // let falcutyID=null;
  // falcuties=await Falcuty.find({});
  // falcutyID=await falcuties.map(obj=>obj._id);

  //   const doctors=await Doctor
  //           .find({falcuty:{$elemMatch:{$in:falcutyID} }})
  //           .populate('keys','name')
  //           .exec();

  // ctx.body=falcuties;
})
//tim theo chuyen khoa

module.exports = router
