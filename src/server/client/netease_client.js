let request = require('request');
let crypto = require('crypto');

const baseUrl = 'http://music.163.com/';

function get(uri, params, cb) {
	return request({
		baseUrl: baseUrl,
		uri: uri,
		method: 'GET',
		qs: params
	}, cb)
}

function post(uri, params, cb) {
	return request({
		baseUrl: baseUrl,
		uri: uri,
		method: 'POST',
		qs: encrypt(params)
	}, cb)
}

function aes(text, key, iv) {
	// pad = 16 - (text.length % 16)
	// text += String.fromCharCode(pad).repeat(pad);
	cipher = crypto.createCipheriv('AES-128-CBC', key, iv);
	encrypted = cipher.update(text, 'utf8', 'base64');
	encrypted += cipher.final('base64');
	return encrypted;
}


function encrypt(params) {
	iv = '0102030405060708';
	params = JSON.stringify(params);
	encSecKey = '257348aecb5e556c066de214e531faadd1c55d814f9be95fd06d6bff9f4c7a41f831f6394d5a3fd2e3881736d94a02' +
		'ca919d952872e7d0a50ebfa1769a7a62d512f5f1ca21aec60bc3819a9c3ffca5eca9a0dba6d6f7249b06f5965ecfff3695b54e1c' +
		'28f3f624750ed39e7de08fc8493242e26dbc4484a01c76f739e135637c';
	enc = aes(params, '0CoJUm6Qyw8W8jud', iv);
	enc = aes(enc, 'F'.repeat(16), iv);
	return {params: enc, encSecKey: encSecKey}
}

module.exports = {get, post};