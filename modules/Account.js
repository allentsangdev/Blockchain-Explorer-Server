const Web3 = require('web3')
const web3  = new Web3("HTTP://127.0.0.1:7545")

async function getAddress() {
 const addresses = await web3.eth.getAccounts()
 return addresses
};

// return the balance of a address in WEI
async function getBalance(address) {
  const balance = await web3.eth.getBalance(address)
  const accountBalanceObj = {
    account: address,
    balance: balance
  }
  return accountBalanceObj
}   
	

//const x = getAddress().then(console.log)
const x = getBalance('0x03d0cf3f4A832C8E2c224BaA4a049110F39E630F').then(console.log)

module.exports = {
	getAddress,
  getBalance
}