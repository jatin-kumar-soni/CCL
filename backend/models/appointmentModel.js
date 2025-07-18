import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({

    userId:{type:String,required:true},
    docId:{type:String,required:true},
    slotDate:{type:String,required:true},
    slotTime:{type:String,required:true},
    // userData:{type:object,required:true},
    // docData:{type:object,required:true},
     userData: { type: mongoose.Schema.Types.Mixed, required: true }, // ✅ fixed
    docData: { type: mongoose.Schema.Types.Mixed, required: true },  // ✅ fixed
    amount:{type:Number,required:true},
    date:{type:Number,required:true},
    cancelled:{type:Boolean,default:false},
    payment:{type:Boolean,default:false},
    isCompleted:{type:Boolean,default:false},

})

const appointmentModel = mongoose.models.appointment || mongoose.model('appointment',appointmentSchema)

export default appointmentModel