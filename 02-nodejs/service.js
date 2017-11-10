var moduleDevfest = require('./data/devfest-2015.js');

module.exports = {
    listerTousLesPresentateurs : function(){
        return moduleDevfest.speakers
    },    
    listerToutesLesSessions : function(){
        return moduleDevfest.sessions
    },    
    trouverSpeaker : function(idSpeaker){
        var speaker = moduleDevfest.speakers.find(speaker => speaker.id == idSpeaker)
        return speaker.firstname + ' ' + speaker.lastname
    },
    trouverUneSession : function(idSession){
        var session = (moduleDevfest.sessions.find(session => session.id == idSession))
        console.log(session.title + '\n   Nom du speaker : ' + this.trouverSpeaker(session.speakers))
        return session
    },    
    listerTopPresentateurs : function(){
        return this.listerTousLesPresentateurs().filter(speaker => speaker.topspeaker)
    },    
    speakerDisplay : function(speakerList){
        speakerList.forEach(speaker => console.log(speaker.firstname + ' ' + speaker.lastname))
    },
    sessionDisplay : function(sessionList){
        sessionList.forEach(session => console.log(session.title))
    }
}


