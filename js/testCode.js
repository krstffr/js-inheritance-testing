var randomMammal = new Mammal();
console.log(randomMammal);
console.log('Has mouth = '+randomMammal.hasMouth);
console.log('Name: '+randomMammal.name);

console.log('------');

var randomHuman = new Human();
console.log(randomHuman);
console.log('Has mouth = '+randomHuman.hasMouth);
console.log('Name: '+randomHuman.name);

console.log('------');

var randomWizard = new Wizard();
console.log(randomWizard);
console.log('Has mouth = '+randomWizard.hasMouth);
console.log('Name: '+randomWizard.name);
console.log('Do magic? '+randomWizard.makeMagic() );

console.log('------');

var randomSoccerPlayer = new SoccerPlayer();
console.log(randomSoccerPlayer);
console.log('Has mouth = '+randomSoccerPlayer.hasMouth);
console.log('Name: '+randomSoccerPlayer.name);
console.log(randomSoccerPlayer.name+' '+randomSoccerPlayer.makeSoccerShot() );

console.log('------');

var randomMessi = new Messi();
console.log(randomMessi);
console.log('Has mouth = '+randomMessi.hasMouth);
console.log('Name: '+randomMessi.name);
console.log(randomMessi.name+' '+randomMessi.makeSoccerShot() );
console.log('The line below should not fail :(');
console.log('Do magic? '+randomMessi.makeMagic() );

console.log('------');