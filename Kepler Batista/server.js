const http = require('http');
const app = require('./API')
const server = http.createServer(app);
app.listen(8082, function () {
   console.log('servidor esta rodando'); 
});
