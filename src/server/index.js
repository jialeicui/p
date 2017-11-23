express = require('express');
client = require('./client/netease_client');
route = express();


const apis = [{
	uri: '/playlist/hot',
	res: require('./playlist/hot')
}, {
	uri: '/playlist',
	res: require('./playlist/detail')
}, {
	uri: '/song',
	res: require('./song/detail')
}];


let app = express();
apis.forEach(api => {
	app.use(api.uri, api.res)
});

// app.listen(7777);

module.exports = app;