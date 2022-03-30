const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const productRouter = require('./routes/productRouter')


const app = express();
let corsOptions = {
	origin: 'http://localhost:8081',
};

//DATABASE CONNECTION
mongoose
	.connect(process.env.DB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		// useFindAndModify: false,
		// useCreateIndex: true,
	})
	.then(() => {
		console.log('Connected to the database');
	})
	.catch((err) => {
		console.log(err);
	});

//MIDDLEWARES
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));


//ROUTES
// app.get('/', (req, res) => {
// 	res.send('HELLO');
// });
app.use('/api/products', productRouter)

//SERVER
const PORT = process.env.port || 5000;
app.listen(PORT, () => {
	console.log(`Server is running on PORT ${PORT}`);
});
