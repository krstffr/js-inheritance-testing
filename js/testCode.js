var someMammal = new Mammal();
console.log('Has this thing got a mouth on it? '+someMammal.hasMouth);
console.log(someMammal.makeNoise());
console.log('---');

var someHuman = new Human();
console.log('Has this thing got a mouth on it? '+someHuman.hasMouth);
console.log(someHuman.makeNoise());
console.log(someHuman.makeTalk('I suck'));
console.log('---');

var someSoccerPlayer = new SoccerPlayer();
console.log('Has this thing got a mouth on it? '+someSoccerPlayer.hasMouth);
console.log(someSoccerPlayer.makeNoise());
console.log(someSoccerPlayer.makeTalk('I am decent at football'));
console.log(someSoccerPlayer.makeSoccerShot());
console.log('---');

var someWizard = new Wizard();
console.log('Has this thing got a mouth on it? '+someWizard.hasMouth);
console.log(someWizard.makeNoise());
console.log(someWizard.makeTalk('I am magic'));
console.log(someWizard.makeMagic());
console.log('Magic power is: '+someWizard.magicLevel);
console.log('Has this thing got a mouth on it? '+someWizard.hasMouth);
console.log('---');

var messi = new Messi();
console.log('Has this thing got a mouth on it? '+messi.hasMouth);
console.log(messi.makeNoise());
console.log(messi.makeTalk('I am decent at football'));
console.log(messi.makeSoccerShot());
console.log(messi.makeMagic());
console.log('Magic power is: '+messi.magicLevel);
console.log('Has this thing got a mouth on it? '+messi.hasMouth);
console.log('---');