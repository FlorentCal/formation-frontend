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
        return 'Nom du speaker : ' + speaker.firstname + ' ' + speaker.lastname
    },
    trouverUneSession : function(idSession){
        var session = (moduleDevfest.sessions.find(session => session.id == idSession))
        session.speakers.forEach(speaker => console.log(this.trouverSpeaker(speaker)))
        console.log('\tSession : ' + session.title)
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


