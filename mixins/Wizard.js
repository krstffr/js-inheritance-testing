var Wizard = function() {
	this.setWizardStuff = function() {
		this.name = this.name + ' the magician';
		this.magicLevel = 10;
		return true;
	};
	this.makeMagic = function() {
		this.hasMouth = false;
		return 'Magic fingers!! I just removed my mouth!';
	};
	if (typeof this.makeNoise === 'function') var origMakeNoise = this.makeNoise;
	this.makeNoise = function() {
		return origMakeNoise('Im a soccer player!');
	};
	this.init = function() {
		this.setWizardStuff();
	};
	this.init();
	
	return this;
};

Mammal.call(Wizard.prototype);
Human.call(Wizard.prototype);