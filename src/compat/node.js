if (typeof window === "undefined" || window === null) {
  	var crypto_mod = require('cry' + 'pto');
  	var _store = {};
	compat = {
		local_storage_get : function (k) { return _store[k] || null; },
		local_storage_set : function (k,v) { return (_store[k] = v); },
		get_random_byte : function () {
			var buf = crypto_mod.rng(1);
			return buf.readUInt8(0);
		},
		get_random_uint32 : function () {
			var buf = crypto_mod.rng(1);
			return buf.readUint8(0);
		},
		html_encode : function (msg) { return msg; },
		print_debug : function (msg) { console.log("D " + msg); },
		print_error : function (msg) { console.log("E " + msg); },
		print_info : function (msg)  { console.log("I " + msg); },
		print_warning : function (msg) { console.log("W " + msg); }
	};
};

