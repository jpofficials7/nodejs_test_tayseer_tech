import mongoose from "mongoose";

//Defining Schema

const schema = new mongoose.Schema({
    amountToSend:{type:Number,required: true},
    amountReceived:{type:String,required:true},
    senderName: {type:String,required:true,trim:true},
    receiverName:{type:String,required:true,trim:true},
    purpose:{type:String,required:true,trim:true}
});


// creating Model using the above schema
const TransactionModel = mongoose.model("transaction",schema);

export default TransactionModel;