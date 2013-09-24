// Init / Constructor
function Human() {
	this.setRandomName();
}

// Inherits
Human.prototype = new Mammal();

// Methods
Human.prototype.makeNoise = function(someNoise) {
	console.log(this);
	return 'I just wanted to speak clearly and say that I am a '+this.prototype+', my name is '+this.name+' and also: '+someNoise;
};

// Init methods
Human.prototype.setRandomName = function() {
	this.name = 'init name';
	var randomizer = Math.random();
	if (randomizer < 0.3) this.name = 'John';
	else if (randomizer < 0.6) this.name = 'Dave';
	else this.name = 'Foobar';
};