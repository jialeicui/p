module.exports = express().get('/:ids', function (req, res) {
	const id = req.params.ids;
	const params = {
		c: JSON.stringify([{ id: id }]),
		ids: '[' + id + ']',
		csrf_token: ''
	};

	client.post('/weapi/v3/song/detail', params, (r, e, b) => {
		res.send(b)
	})
});

