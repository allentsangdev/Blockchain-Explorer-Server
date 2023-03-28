const getAddress = require ('./modules/Account.js') 
const getTransactionHistory = require ('./modules/Transaction.js') 
const express = require ('express')
const cors = require('cors')
const app = express()
const PORT = process.env.port || 4000
const router = express.Router()

// using cors() as middleware
// Cross-origin resource sharing (CORS) allows AJAX requests to skip the Same-origin policy and access resources from remote hosts.
app.use(cors())

// defining routers
router.get('/', (req, res) => {
	res.status(200).send('<h1>This is the Landing Page of the Blockchain Explorer Backend Server</h1>')
})

// GET request: calls getAddresses method from the Account module
router.get('/account/addresses', (req,res) => {
	try {
		const addresses = getAddress()
		console.log(addresses)
		res.status(200).send(addresses)
	} catch {
		res.status(500).send('There is an unexpected condition. Please contact system admin')
	}
})

// GET request: calls getBalance method from Account module
router.get('/account/balance', (req,res) => {
	try {
		const balance = getBalance()
		console.log(balance)
		res.status(200).send(balance)
	} catch {
		res.status(500).send('There is an unexpected condition. Please contact system admin')
	}
})

// GET request: calls the getTransactionHistory method from the Transaction module
router.get('/account/history', (req,res) => {
	try {
		const history = getTransactionHistory()
		console.log(history)
		res.status(200).send(history)
	} catch {
		res.status(500).send('There is an unexpected condition. Please contact system admin')
	}
})

app.use('/', router)

app.listen(PORT, () => {
	console.log(`Server listening on PORT ${PORT}`)
})