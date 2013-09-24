// Init / Constructor
function Wizard() {
	this.setWizardStuff();
}

// Inherits
Wizard.prototype = new Human();

// Methods
Wizard.prototype.makeMagic = function(someNoise) {
	this.hasMouth = false;
	return 'Magic!! Removing my own mouth.';
};

// Init methods
Wizard.prototype.setWizardStuff = function() {
	this.name = this.name + ' the magician';
	this.magicLevel = 10;
};