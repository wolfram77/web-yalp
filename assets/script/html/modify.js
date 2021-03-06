/* MODIFY - modify the html document structure */
/* @wolfram77 / @subhajit */

(function(g, $h) {

	var $ = $h;
	var p = $.prototype;

	// add elements
	p.add = function(dir, val) {
		var par = dir.indexOf('Child')>=0;
		for(var i=this.set.length; i--;) {
			(par? this.set[i].parentElement : this.set[i]).insertBefore(val.cloneNode(true), this._modifyRef(this.set[i], dir));
		}
		return this;
	};

	// replace elements
	p.replace = function(val) {
		var v = this._modifyMakeFragment(val);
		for(var i=this.set.length; i--;) this.set[i].parentNode.replaceChild(v, this.set[i]);
		return this;
	};

	// remove elements
	p.remove = function(shallow) {
		for(var i=this.set.length; i--;) {
			if(shallow) this._modifyInsertBefore(this.set[i].parent, this.set[i].childNodes, this.set[i]);
			else this.set[i].remove();
		}
		return this;
	};

	// private: convert a set of elements to document fragment
	p._modifyMakeFragment = function(elems) {
		var frag = document.createDocumentFragment();
		for(var i=0; i<elems.length; i++) frag.appendChild(elems[i]);
		return frag;
	};

	// private: insert elements before reference
	p._modifyInsertBefore = function(par, ins, ref) {
		for(var i=0; i<ins.length; i++) par.insertBefore(ins[i], ref);
	};

	// private: get reference element
	p._modifyRef = function(elem, dir) {
		switch(dir) {
			case 'next': return elem.nextElementSibling;
			case 'prev': return elem;
			case 'firstChild': return elem.firstElementChild;
		}
		return null;
	};

	// ready
	if(typeof module!=='undefined') module.exports = $;
	(g.html=g.html||{}).modify = $;
	console.log('html.modify> ready!');
})($$, $$.html.base);
