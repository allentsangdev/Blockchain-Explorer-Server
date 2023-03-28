const mockAddresses = [
  {
    address: "0x6dC70bEa16f1ef94A7350989ca5413a2E180860f",
    balance: "10 ETH",
  },
  {
    address: "0x03d0cf3f4A832C8E2c224BaA4a049110F39E630F",
    balance: "10 ETH",
  },
  {
    address: "0x36Ea572e283b1E6d18942d3344c178c810A0d8dD",
    balance: "10 ETH",
  },
  {
    address: "0x49F0B7F9B45Ed3a139E345B14530a9D92B30B04e",
    balance: "10 ETH",
  },
  {
    address: "0x69CE2776D92bcC75ab4148B54d8C86A6F136C8AC",
    balance: "100 ETH",
  }
];

function getAddress() {
	const address = []
  	mockAddresses.map((item) => {
	address.push(item.address)
  })
	return address
};

function getBalance(_address) {
	const obj = mockAddresses.find(item => item.address === _address);
	return obj ? obj.balance : "Address not found";
}   
	
module.exports = {
	getAddress,
  getBalance
}