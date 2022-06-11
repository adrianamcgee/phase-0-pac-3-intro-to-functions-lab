function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    console.log(string.toUpperCase());
}

logShout(console.log(`hello`));

function logWhisper(string){
    console.log(string.toLowerCase());
}
logShout(console.log(`hello`));

function sayHiToHeadphonedRoommate(string){
    if(string === string.toLowerCase()) {
        console.log(`I can't hear you!`)
        return `I can't hear you!`;

    }if (string === string.toUpperCase())
        console.log(`YES INDEED!`)
        return `YES INDEED!`;

     if (string === `Let's have dinner together!`.toUpperCase()){
        return `I would love to!`;
    }
    }

sayHiToHeadphonedRoommate(console.log(`Let's have dinner together`.toUpperCase()));