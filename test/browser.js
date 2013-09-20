
var unittest = require('./unittest')

// List all of the tests to run here.
// By requiring them, they will register with the 
// global unittest object above.
//require('./general/openpgp.basic.js');
require('./ciphers/symmetric/aes.js');
require('./ciphers/symmetric/blowfish.js');
require('./ciphers/symmetric/cast5.js');
require('./ciphers/symmetric/des.js');
require('./ciphers/symmetric/twofish.js');
require('./ciphers/hash/md5.js');
require('./ciphers/hash/ripe-md.js');
require('./ciphers/hash/sha.js');
require('./ciphers/openpgp.crypto.js');
require('./ciphers/openpgp.sigcheck.js');

exports.unittest = unittest;
exports.lib = require('../index');