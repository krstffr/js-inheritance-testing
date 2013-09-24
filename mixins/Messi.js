var Messi = function() {
	this.setMessiStuff = function() {
		this.name = 'Leo Messi';
		this.soccerSkill *= 6;
		return true;
	};
	if (typeof this.makeSoccerShot === 'function') var origMakeSoccerShot = this.makeSoccerShot;
	this.makeSoccerShot = function() {
		return origMakeSoccerShot() + ' and also hits it without a problem.';
	};
	this.init = function() {
		this.setMessiStuff();
	};
	this.init();
	
	return this;
};

Mammal.call(Messi.prototype);
Human.call(Messi.prototype);
SoccerPlayer.call(Messi.prototype);
Wizard.call(Messi.prototype);