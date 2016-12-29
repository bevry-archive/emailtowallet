/* @flow */
'use strict'

const map = require('../map.json')

function emailToHash (email /* :string */ ) /* :string */ {
	return require('crypto').createHash('rmd160').update(`${email}-emailtowallet`).digest('hex')
}

function emailToWallet (email /* :string */ ) /* :?Object */ {
	const hash = emailToHash(email)
	return map[hash]
}

module.exports = {emailToHash, emailToWallet}
