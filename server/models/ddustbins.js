const mongoose = require('mongoose')

const dbschema = new mongoose.Schema({ 
  binId:{
    type: String,
    required: true
  },
  binLocation:{
    type:String,
    required:true
  },
  binImage:{
    type:String
  }
})
const DBs = mongoose.model('dustbin', dbschema)
module.exports = DBs