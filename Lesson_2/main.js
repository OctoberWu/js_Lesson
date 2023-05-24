// const axios = require('axios');

// // axios.interceptors.response.use(undefined, (err) => {
// //   const { config, message } = err;
// //   if (!config || !config.retry) {
// //     return Promise.reject(err);
// //   }
// //   // retry while Network timeout or Network Error
// //   if (!(message.includes("timeout") || message.includes("Network Error"))) {
// //     return Promise.reject(err);
// //   }
// //   config.retry -= 1;
// //   const delayRetryRequest = new Promise((resolve) => {
// //     setTimeout(() => {
// //       // console.log("retry the request", config.url);
// //       resolve();
// //     }, config.retryDelay || 1000);
// //   });
// //   return delayRetryRequest.then(() => axios(config));
// // });

// axios.interceptors.response.use(null, (error) => {
// 	console.log('##############')
// 	console.log(error.response.status)
// 	if (error.config && error.response && error.response.status === 401) {
// 		return updateToken().then((token) => {
// 			// error.config.headers.xxxx <= set the token
// 			return axios.request(config);
// 		});
// 	}

// 	return Promise.reject(error);
// });

// ==================================================================
const _axios = require('axios');

const axios = _axios.create({
	baseURL: 'http://localhost:5000'
});

const sleepRequest = (milliseconds, originalRequest) => {
	return new Promise((resolve, reject) => {
		console.log('Sleeping');
		// console.log(originalRequest);
		setTimeout(() => resolve(axios(originalRequest)), milliseconds);
	});
};

axios.interceptors.response.use(response => {
	return response;
}, error => {
	console.log(error);
	const { config, response: { status } } = error;
	console.log(config.retry)
	const originalRequest = config;

	// if (status === 420) {
	if (status !== 200 && config.retry !== 0) {
		console.log(`status: ${status}`);
		config.retry--;
		console.log(config.retry);
		return sleepRequest(1000, originalRequest);
	} else {
		return Promise.reject(error);
	}
});

// export default instance;

// when request, can set retry times and retry delay time
// const url = "http://localhost:5000/nono"
const url = "/nono"
axios.get(url, { retry: 8, retryDelay: 1000 });