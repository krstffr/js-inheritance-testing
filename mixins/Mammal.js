var Mammal = function() {
	this.setSomeInitStuff = function() {
		this.hasMouth = true;
		this.laysEggs = false;
		return true;
	};
	this.makeNoise = function() {
		return 'Ugh! Iiiiihii! ';
	};
	this.init = function() {
		this.setSomeInitStuff();
	};
	this.init();

	return this;
};