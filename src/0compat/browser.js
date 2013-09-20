// _compat first because it should come first in the output.
var compat;
if (typeof window !== "undefined" && window !== null) {
	compat = {
		local_storage_get : function (k) {
			return window.localStorage.getItem(k)
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
		},
		html_encode : function (message) {
			if (message == null)
				return "";
			return $('<div/>').text(message).html();
		},
		print_debug : function (str) {
			str = compat.html_encode(str);
			compat.showMessages("<tt><p style=\"background-color: #ffffff; width: 652px; word-break: break-word; padding: 5px; border-bottom: 1px solid black;\">"+str.replace(/\n/g,"<br>")+"</p></tt>");
		},
		print_error : function (str) {
			str = openpgp_encoding_html_encode(str);
			showMessages("<p style=\"font-size: 80%; background-color: #FF8888; margin:0; width: 652px; word-break: break-word; padding: 5px; border-bottom: 1px solid black;\"><span style=\"color: #888;\"><b>ERROR:</b></span>	"+str.replace(/\n/g,"<br>")+"</p>");
		},
		print_info : function (str) {
			str = openpgp_encoding_html_encode(str);
			showMessages("<p style=\"font-size: 80%; background-color: #88FF88; margin:0; width: 652px; word-break: break-word; padding: 5px; border-bottom: 1px solid black;\"><span style=\"color: #888;\"><b>INFO:</b></span>	"+str.replace(/\n/g,"<br>")+"</p>");
		},
		print_warning : function (str) {
			str = openpgp_encoding_html_encode(str);
			showMessages("<p style=\"font-size: 80%; background-color: #FFAA88; margin:0; width: 652px; word-break: break-word; padding: 5px; border-bottom: 1px solid black;\"><span style=\"color: #888;\"><b>WARNING:</b></span>	"+str.replace(/\n/g,"<br>")+"</p>");
		},
		get_navigator : function () { return navigator; }
	};
};

