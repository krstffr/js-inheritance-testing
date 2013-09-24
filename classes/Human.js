var Human = ring.create([Mammal], {
	setRandomName: function() {
		this.name = 'init name';
		var randomizer = Math.random();
		if (randomizer < 0.3) this.name = 'John';
		else if (randomizer < 0.6) this.name = 'Dave';
		else this.name = 'Foobar';
	},
	makeTalk: function(someNoise) {
		return 'I just wanted to speak clearly and say that my name is '+this.name+' and also: '+someNoise;
	},
	init: function() {
		this.$super();
		this.setRandomName();
	}
});