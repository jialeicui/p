import request from 'request-promise'

const baseUrl = 'http://127.0.0.1:7778/';

function get(uri, params) {
	return request({
		baseUrl: baseUrl,
		uri: uri,
		method: 'GET',
		qs: params
	}).then(data => {
		return JSON.parse(data)
	}).catch(err => {
		console.log(err)
	})
}


export {get}