import express from 'express'
import client from '../client/netease_client'


module.exports = express().get('/:id', function (req, res) {
	const params = {
		id: req.params.id,
		offset: 0,
		total: true,
		limit: 1000,
		n: 1000,
		csrf_token: ''
	};

	client.post('/weapi/v3/playlist/detail', params, (r, e, b) => {
		res.send(b)
	})
});

