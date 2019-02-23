

const router = require('koa-router')();
const mongoose = require('mongoose');
const Doctor = require('../models/doctor');
const Disease=require('../models/disease');
const Falcuty=require('../models/falcuty');
router.prefix('/diseases')


//tim theo trieu chung
router.get('/', async (ctx, next) => {
  const symptom=ctx.query.symptom;
  const regex=new RegExp(symptom, 'i');
  let falcuties=null;
  let falcutyID=null;
    falcuties=await Disease.find({symptom:regex})
                  .select('falcutyID')
    falcutyID=await falcuties.map(obj=>obj.falcutyID);



    const doctors=await Doctor
            .find({falcuty:{$elemMatch:{$in:falcutyID} }})
            .populate('keys','name')
            .exec();

  ctx.body=doctors;
})
//tim theo chuyen khoa

module.exports = router
