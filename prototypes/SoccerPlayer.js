// Init / Constructor
function SoccerPlayer() {
	this.setSoccerPlayerStuff();
}

// Inherits
SoccerPlayer.prototype = new Human();

// Methods
SoccerPlayer.prototype.makeSoccerShot = function() {
	return 'Shooting for krysset';
};

// Init methods
SoccerPlayer.prototype.setSoccerPlayerStuff = function() {
	this.name = this.name + ' Ronaldinho';
	this.soccerSkill = Math.random()*10;
};