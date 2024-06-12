const mongoose = require ("mongoose")
const schema = mongoose.Schema(
    {
        "fid":{type:String,required:true},
        "fname":{type:String,required:true},
        "price":{type:String,required:true},
        "image":{type:String,required:true},
    }
)

let fashionmodel = mongoose.model("fashions",schema);
module.exports = {fashionmodel}