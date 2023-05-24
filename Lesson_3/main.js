const express = require('express');
const cors = require('cors');
const axios = require('axios');
const axiosRetry = require('axios-retry');

const app = express();


app.use(cors());

axiosRetry(axios, {
	retries: 3,
	retryDelay: (retryCount) => {
		console.log(`Retrying request, attempt number ${retryCount}`);
		return retryCount * 1000; // wait 1s, 2s, 3s between retries
	}
});

app.get('/posts', async (req, res) => {
	console.log("Hitting posts api");
	try {
		const response = await axios.get('https://api.example.com/endpoint');
		console.log(response.data);
	} catch (error) {
		console.error("Error while hitting posts api");
	}
});


app.listen(8888, () => {
	console.log('Server listening on port 8888');
});