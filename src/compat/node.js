if (typeof window === "undefined" || window === null) {
  	var crypto_mod = require('cry' + 'pto');
	compat = {
		local_storage_get : function (k) { return null; },
		local_storage_set : function (k,v) { return null; },
		get_random_byte : function () {
			var buf = crypto_mod.rng(1);
			return buf.readUInt8(0);
		},
		get_random_uint32 : function () {
			var buf = crypto_mod.rng(1);
			return buf.readUint8(0);
		}
	};
};

