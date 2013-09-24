// HERE THE WIZARD STUFF SHOULD BE INCLUDED AS WELL!

// Init / Constructor
function Messi() {
	this.setMessiStuff();
}

// Inherits
Messi.prototype = new SoccerPlayer();

// Methods
Messi.prototype.makeSoccerShot = function() {
	return 'Shooting for krysset AND HITS IT WITHOUT PROBLEMS';
};

// Init methods
Messi.prototype.setMessiStuff = function() {
	this.name = this.name + ', but really Leo Messi';
	this.soccerSkill *= 10;
};