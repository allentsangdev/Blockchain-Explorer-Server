const mongoose = require('mongoose')

const dbUri = 'mongodb+srv://allen-admin:test1234@cluster0.bgd3asx.mongodb.net/transaction?retryWrites=true&w=majority'

// define transaction history data schema
const TransactionSchema = new mongoose.Schema({
    
    transactionHash: String,
    status: String,
    timeStamp: String,
    from: String,
    to: String,
    value: String,
    gasUsed: String
    
})

// define transaction history model
const transactionModel = new mongoose.model('history', TransactionSchema)

// async functino to fetch all history document
async function getTransactionHistory() {
    mongoose.connect(dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    const history = await transactionModel.find({})
    return history
}

module.exports = {
    getTransactionHistory
}

/*
const transactionHistoryData = new transactionModel(
    {
        transactionHash: "0x1367409cddde9a7c8571d34f935adcb2a50214f2afbb151bb16eaf8847dda2ff",
        status: "SUCCESS",
        timeStamp: "2022-03-29T044:08:03.172Z",
        from: "0x6dC70bEa16f1ef94A7350989ca5413a2E180860f",
        to: "0x03d0cf3f4A832C8E2c224BaA4a049110F39E630F",
        value: "250 ETH",
        gasUsed: "21000"
    })
  
  transactionHistoryData.save()
  .then(()=>{console.log('saved')})

getTransactionHistory()
*/