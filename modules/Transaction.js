// This module contain functions from Full Stack 2 and Full Stack 3
// function "sendTransaction" is created for Full Stack 3 Lab Test

// MongoDB Configuration
const mongoose = require('mongoose')
const dbUri = 'mongodb+srv://allen-admin:test1234@cluster0.bgd3asx.mongodb.net/transaction?retryWrites=true&w=majority'

// Web3.js Configuration
const Web3 = require("web3");
let web3 = new Web3("HTTP://127.0.0.1:7545");

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

// function for full stack 3 lab test
// _source will be the user's private key
// _destination will be the recipient's public address
// _value will be tranfer amount in WEI
// this function will return the transaction receipt
async function sendTransaction(_source, _destination, _value) {
    
    // Hardcoded Gas Limit
    const _txGasLimit = "21000"
    
    const signTxnParams = {
        to: _destination,
        value: _value,
        gas: _txGasLimit 
    }

    // sign the transaction
    const transactionSignature = await web3.eth.accounts.signTransaction(signTxnParams, _source)

    // send the signed transaction
    const transfer = await web3.eth.sendSignedTransaction(transactionSignature.rawTransaction)
    
    console.log(transfer)
    // return the transaction receipt
    return transfer

}

module.exports = {
    getTransactionHistory,
    sendTransaction
}