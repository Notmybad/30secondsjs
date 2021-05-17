// setTimeout() is not exactly a perfect tool for the job
// const awaitTimeout = delay =>
//     new Promise(resolve => setTimeout(resolve, delay))

const fetch = require('node-fetch')

const awaitTimeout = (delay, reason) => 
    new Promise((resolve, reject) =>
        setTimeout(
            () => (reason === undefined ? resolve() : reject(reason)), 
            delay
        )
    );

const wrapPromise = (promise, delay, reason) =>
    Promise.race([promise, awaitTimeout(delay, reason)]);

wrapPromise(fetch('http://baidu.com', 4000), 3000, {
    reason: 'Fetch timeout',
})
  .then(data => {
      console.log(data.message)
  })
  .catch(data => console.log(`Failed with reason: ${data.reason}`))
