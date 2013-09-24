// Methods
Mammal.prototype.makeNoise = function(someNoise) {
	return 'Ugh! Iiiiihii! '+someNoise;
};

// Init methods
Mammal.prototype.setSomeInitStuff = function() {
	this.hasMouth = true;
	this.laysEggs = false;
};

// Init / Constructor
function Mammal() {
	this.setSomeInitStuff();
}