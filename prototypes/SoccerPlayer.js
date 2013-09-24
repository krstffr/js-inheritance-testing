var SoccerPlayer = function() {
	this.setSoccerPlayerStuff = function() {
		this.name = this.name + ' Ronaldinho';
		this.soccerSkill = Math.random()*10;
		return true;
	};
	this.makeSoccerShot = function() {
		return 'Shooting for krysset';
	};
	if (typeof this.makeNoise === 'function') var origMakeNoise = this.makeNoise;
	this.makeNoise = function() {
		return origMakeNoise('Im a soccer player!');
	};
	this.init = function() {
		this.setSoccerPlayerStuff();
	};
	this.init();
	
	return this;
};

Mammal.call(SoccerPlayer.prototype);
Human.call(SoccerPlayer.prototype);