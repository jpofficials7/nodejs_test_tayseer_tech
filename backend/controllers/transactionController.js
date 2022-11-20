import TransactionModel from "../models/Transactions.js";

class TransactionController {
    static exchangeRate = async (req,res)=>{
        const {amountSend} = req.body;
        console.log(amountSend);
        let calculatedRate = amountSend*80;
        res.json({calculatedRate:calculatedRate});

    };

    static purpose = async (req,res)=>{
        let purposeArray = ["schoolFees","collegeFees","rent","otherExpenditure"];
        res.send(purposeArray);

    };

    static listTransaction = async (req,res)=>{
        try {
            const record = await TransactionModel.find({});
            res.json(record);
            
        } catch (error) {
            console.log(error);
            res.send({
                Status: "failed",
                message: "Unable to retrive transaction",
              });
        }

    };

    static saveTransaction = async (req,res)=>{
        
        const {amountToSend,amountReceived,senderName,receiverName,selectedValue} = req.body;
        console.log(amountReceived);
        
            try {
                const transaction = new TransactionModel({
                    amountToSend:amountToSend,
                    amountReceived:amountReceived,
                    senderName:senderName,
                    receiverName:receiverName,
                    purpose:selectedValue
                });
                console.log(req.body);
                await transaction.save();
                res.send({
                    Status: "Success",
                    message: "transaction saved successfully"
                });
            } catch (error) {
                console.log(error);
                res.send({
                    Status: "failed",
                    message: "Unable to save transaction",
                  });
            }
        
    };
}

export default TransactionController;