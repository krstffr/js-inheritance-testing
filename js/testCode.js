var someHuman = new Human();
console.log('Has this thing got a mouth on it? '+someHuman.hasMouth);
console.log(someHuman.makeNoise('I am not a god, but a human'));
console.log(someHuman.makeTalk('I suck'));
console.log('---');

var someMammal = new Mammal();
console.log('Has this thing got a mouth on it? '+someMammal.hasMouth);
console.log(someMammal.makeNoise());
console.log('---');

var someSoccerPlayer = new SoccerPlayer();
console.log('Has this thing got a mouth on it? '+someSoccerPlayer.hasMouth);
console.log(someSoccerPlayer.makeNoise());
console.log(someSoccerPlayer.makeTalk('soccer rules!'));
console.log('My random soccer skill is: '+someSoccerPlayer.soccerSkill);
console.log(someSoccerPlayer.makeSoccerShot());
console.log('---');

var messi = new Messi();
console.log('Has this thing got a mouth on it? '+messi.hasMouth);
console.log(messi.makeNoise());
console.log(messi.makeTalk('soccer rules!'));
console.log('My random soccer skill is: '+messi.soccerSkill);
console.log(messi.makeSoccerShot());
console.log(messi.makeMagic());
console.log('Still has a mouth on it? '+messi.hasMouth);
console.log('---');