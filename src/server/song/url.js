import express from 'express'
import client from '../client/netease_client'

module.exports = express().get('/:ids', function (req, res) {
	const id = req.params.ids;
	const params = {
		ids: [id],
		br: 999000,
		csrf_token: ''
	};

	client.post('/weapi/song/enhance/player/url', params, (r, e, b) => {
		res.send(b)
	})
});

