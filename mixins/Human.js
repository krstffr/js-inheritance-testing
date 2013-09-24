var Human = function() {
	this.setRandomName = function() {
		this.name = 'init name';
		var randomizer = Math.random();
		if (randomizer < 0.3) this.name = 'John';
		else if (randomizer < 0.6) this.name = 'Dave';
		else this.name = 'Foobar';
	};
	this.makeTalk = function(someNoise) {
		return 'I just wanted to speak clearly and say that my name is '+this.name+' and also: '+someNoise;
	};
	this.init = function() {
		this.setRandomName();
	};
	this.init();
	
	return this;
};

Mammal.call( Human.prototype );