// Methods
Mammal.prototype.makeNoise = function() {
	return 'Ugh! Iiiiihii!';
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