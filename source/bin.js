/* @flow */
/* eslint no-console:0 */
'use strict'

const lib = require('../')
const args = process.argv.slice(2)

if ( args[0] === 'hash' && args[1] ) {
	console.log(lib.emailToHash(args[1]))
}
else if ( args[0] === 'wallet' && args[1] ) {
	console.log(JSON.stringify(lib.emailToWallet(args[1]), null, '  '))
}
else {
	console.error(`USAGE:
emailtowallet hash an@email.address
emailtowallet wallet an@email.address`)
}
