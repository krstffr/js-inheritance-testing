// Init / Constructor
function Human() {
	this.setRandomName();
}

// Inherits
Human.prototype = new Mammal();

// Methods
Human.prototype.makeNoise = function(someNoise) {
	return 'I just wanted to speak clearly and say that my name is '+this.name;
};
Human.prototype.makeTalk = function(talk) {
	return talk;
};

// Init methods
Human.prototype.setRandomName = function() {
	this.name = 'init name';
	var randomizer = Math.random();
	if (randomizer < 0.3) this.name = 'John';
	else if (randomizer < 0.6) this.name = 'Dave';
	else this.name = 'Foobar';
};