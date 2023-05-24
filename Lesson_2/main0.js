const axios = require('axios');
const axiosRetry = require('axios-retry');

axiosRetry(axios, {
  retries: 3,
  retryDelay: axiosRetry.exponentialDelay,
});

const request = {
  method: 'Get',
  url: 'https://jsonplaceholder.typicode.com/users/1',
  timeout: 1000,
  proxy: {
    host: "10.32.80.80",
    port: 800,
    auth: { username: "username", password: "password" }
  }
};

axios(request)
  .then((resp) => {
    console.log('response: ', resp);
  }).catch((err) => {
    // console.log('error', 'error while making axios request using proxy', err);
    console.log('error happened!');
    throw new Error(err);
  });

