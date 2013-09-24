var Messi = ring.create([SoccerPlayer, Wizard], {
	setMessiStuff: function() {
		this.name = 'Leo Messi';
		this.soccerSkill *= 6;
		return true;
	},
	makeSoccerShot: function() {
		return this.$super() + ' and also hits it without a problem.';
	},
	init: function() {
		this.$super();
		this.setMessiStuff();
	}
});