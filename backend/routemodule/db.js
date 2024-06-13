const mongoose=require('mongoose');


const Schem=mongoose.Schema({
    title:{
        type:String,
        required:true

    },
    description:{
        type:String,
        required:true
    }
},{timestamps:true}
)

const POST=mongoose.model("POST",Schem);
export default POST;

