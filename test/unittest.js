
function test_result(str_description, boolean_result) {
	this.description = str_description;
	this.result = boolean_result;
}

module.exports = {
	tests: Array(),
	register: function(str_title, func_runtest) {
		this.tests[this.tests.length] = {title: str_title, run: func_runtest};
		
	},
	
	runAll: function() {
		var result = new Array();
		for (var i = 0; i < this.tests.length; i++) {
				result[i] = {tests: this.tests[i].run(test_result), title: this.tests[i].title };
		}
		return result;
	},
	test_result : test_result
}
