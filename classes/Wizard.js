var Wizard = ring.create([Human], {
	setWizardStuff: function() {
		this.name = this.name + ' the magician';
		this.magicLevel = 10;
		return true;
	},
	makeMagic: function() {
		this.hasMouth = false;
		return 'Magic fingers!! I just removed my mouth!';
	},
	makeNoise: function() {
		return this.$super()+' I am a wizard.';
	},
	init: function() {
		this.$super();
		this.setWizardStuff();
	}
});