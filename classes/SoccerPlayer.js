var SoccerPlayer = ring.create([Human], {
	setSoccerPlayerStuff: function() {
		this.name = this.name + ' Ronaldinho';
		this.soccerSkill = Math.random()*10;
		return true;
	},
	makeSoccerShot: function() {
		return 'Shooting for krysset';
	},
	makeNoise: function() {
		return this.$super()+' and also I\'m a soccer player!';
	},
	init: function() {
		this.$super();
		this.setSoccerPlayerStuff();
	}
});