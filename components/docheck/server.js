var express = require('express'),
	app = express(),
	http = require('http'),
	httpServer = http.Server(app),
	port = 9000,
	target = '/',
	host = '0.0.0.0';

app.use(express.static(__dirname + "/public"));
app.get('/*', (req, res) => {
    res.sendFile(__dirname + target + '/index.html');
});

app.listen(port, host);


console.log('Server is runnig at ' + host + ':' + port);