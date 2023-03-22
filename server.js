const getAddress = require ('./modules/getAddress.js') 

const express = require ('express')

const app = express()

const PORT = process.env.port || 4000

const router = express.Router()

router.get('/', (req, res) => {
	res.status(200).send('<h1>This is the Landing Page of the Blockchain Explorer Backend Server</h1>')
})

router.get('/account/addresses', (req,res) => {
	try {
		const addresses = getAddress()
		console.log(addresses)
		res.status(200).send(addresses)
	} catch {
		res.status(500).send('There is an unexpected condition. Please contact system admin')
	}
})

app.use('/', router)

app.listen(PORT, () => {
	console.log(`Server listening on PORT ${PORT}`)
})