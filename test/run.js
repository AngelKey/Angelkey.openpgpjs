
var unittest = require('./unittest');
var colors = require('colors');
var test_files = [
	'./general/openpgp.basic.js',
	'./ciphers/symmetric/aes.js'
];

// By requiring all of the files, they will in turn register themselves
// with the unittests global above.
for (var i in test_files) {
	require(test_files[i]);
}

function greenify(msg) {
	var parts = msg.split("\n");
	var out = []
	for (var i in parts) {
		if (i == 0) {
			out.push(colors.green(parts[i]));
		} else {
			out.push(colors.grey(parts[i]));
		}
	}
	return out.join("\n");
}

var CHECK = "\u2714";
var BAD_X = "\u2716";
var total = 0;
var good = 0;
var bad = 0;
for (var i in unittest.tests) {
	var test = unittest.tests[i];
	console.log(("============= " + test.title + " =====================").bold);
	var results = test.run(unittest.test_result);
	for (var j in results) {
		total++;
		result = results[j];
		if (result.result) {
			good++;
			console.log(CHECK + " " + greenify(result.description));
		} else {
			bad++;
			console.log((BAD_X + " " + result.description).bold.red);
		}
	}
}
if (good === total) {
	console.log(("All " + total + " tests succeeded").green.bold);
} else {
	console.log(("FAILURE: Only " + good + "/" + total + " tests passed").red.bold);
}
