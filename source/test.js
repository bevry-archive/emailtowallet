/* @flow */
'use strict'

const lib = require('../')
const joe = require('joe')
const assert = require('assert-helpers')

joe.suite('emailtowallet', function (suite, test) {
	test('hash', function () {
		assert.equal(
			lib.emailToHash('spam@bevry.me'),
			'8f390c0e8af29dfc200dea32d0f4c0b5724507fb',
			'spam@bevry.me was hashed correctly'
		)
	})
	test('wallet', function () {
		assert.deepEqual(
			lib.emailToWallet('spam@bevry.me'),
			{
				bitcoin: '17gyiZcuVru4xNGkiR1TNrqZ5qVFgTxiYV',
				paypal: 'paypal@bevry.me'
			},
			'spam@bevry.me was fetched correctly'
		)
	})
})
