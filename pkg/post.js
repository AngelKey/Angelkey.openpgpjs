exports.OpenPGP = _openpgp;
exports.openpgp = openpgp;
exports.ciphers = {
	symmetric : {
		AES: {
			encrypt : AESencrypt,
			keyExpansion : keyExpansion
		},
		Blowfish : {
			encrypt : BFencrypt
		},
		Cast5 : {
			encrypt : cast5_encrypt
		},
		DES : {
			createKeys : des_createKeys,
			desede : desede,
			des : des
		}
	}
};
exports.util = util;
