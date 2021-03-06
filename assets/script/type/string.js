/* STRING - provides basic string functions */
/* @wolfram77 / @subhajit */

(function(g) {

	var $ = {};

	// replace all in string
	$.replaceAll = function(src, map) {
		var re = new RegExp(_.keys(map).join("|"), "g");
		return src.replace(re, function(m) { return map[m]; });
	};

	// get in camel case
	$.camelCase = function(src) {
		return src.replace(/(-+|\s+)\w/g, function (g) { return g[1].toUpperCase(); });
	};

	// ready!
	if(typeof module!=='undefined') module.exports = $;
	(g.type=g.type||{}).string = $;
	console.log('type.string> ready!');
})($$);
