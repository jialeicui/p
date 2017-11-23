import request from 'request'

const baseUrl = 'http://127.0.0.1:7778/';

function get(uri, params, cb) {
	return request({
		baseUrl: baseUrl,
		uri: uri,
		method: 'GET',
		qs: params
	}, cb)
}


export {get}