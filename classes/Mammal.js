var Mammal = ring.create({
	setSomeInitStuff: function() {
		this.hasMouth = true;
		this.laysEggs = false;
		return true;
	},
	makeNoise: function() {
		return 'Ugh! Iiiiihii! ';
	},
	init: function() {
		this.$super();
		this.setSomeInitStuff();
	}
});