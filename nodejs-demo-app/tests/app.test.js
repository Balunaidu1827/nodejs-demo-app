// tests/app.test.js
const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'GET'
};

const req = http.request(options, res => {
  let data = '';
  res.on('data', chunk => {
    data += chunk;
  });
  res.on('end', () => {
    console.log(`Status Code: ${res.statusCode}`);
    console.log(`Body: ${data}`);
    if (res.statusCode === 200 && data === 'Hello Jarvis This is My DevOps Task') {
      console.log('✅ Test Passed');
    } else {
      console.error('❌ Test Failed');
    }
  });
});

req.on('error', error => {
  console.error('❌ Test Error:', error);
});

req.end();
