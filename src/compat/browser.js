
var compat;
if (typeof window !== "undefined" && window !== null) {
	compat = {
		local_storage_get : function (k) {
			return window.localStoage.getItem(k)
		},
		local_storage_set : function (k,v) {
			return window.localStorage.setItem(k,v);
		},
		get_random_byte : function () {
			var buf = new Uint8Array(1);
			window.crypto.getRandomValues(buf);
			return buf[1];
		},
		get_random_uint32 : function () {
			var buf = new Uint32Array(1);
			window.crypto.getRandomValues(buf);
			return buf[1];
		}
	};
};

