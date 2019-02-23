

const router = require('koa-router')();
const mongoose = require('mongoose');
const Doctor = require('../models/doctor');
const Disease=require('../models/disease');
const Falcuty=require('../models/falcuty');
router.prefix('/diseases')


//tim theo trieu chung
router.get('/', async (ctx, next) => {
  const symptom=ctx.query.symptom;
  const chuyenkhoa=ctx.query.falcuty;
  const regex=new RegExp(symptom||chuyenkhoa, 'i');
  let falcuties=null;
  let falcutyID=null;
    if(symptom){
    falcuties=await Disease.find({symptom:regex})
                  .select('falcutyID')
    falcutyID=await falcuties.map(obj=>obj.falcutyID);
                }
    else {
    falcuties=await Falcuty.find({})
                .select('id');
    falcutyID=await falcuties.map(obj=>obj.id);
    }

    const doctors=await Doctor
            .find({falcuty:{$elemMatch:{$in:falcutyID} }})
            .populate('keys','name')
            .exec();

  ctx.body=doctors;
})
//tim theo chuyen khoa

module.exports = router
