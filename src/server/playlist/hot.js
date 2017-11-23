import express from 'express'
import client from '../client/netease_client'

module.exports = express().get('/', function (req, res) {
	let params = {
		cat: '全部',
		order: 'hot',
		offset: 0,
		limit: 10,
	};

	client.post('/weapi/playlist/list', params, (e, r, b) => {
		res.send(b)
	})
});
