import express from 'express'
import client from './client/netease_client'

const apis = [{
	uri: '/hot/playlist',
	res: require('./playlist/hot')
}, {
	uri: '/playlist',
	res: require('./playlist/detail')
}, {
	uri: '/song/url',
	res: require('./song/url')
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