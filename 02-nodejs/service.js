var moduleDevfest = require('./data/devfest-2015.js');

module.exports = {
    listerTousLesPresentateurs : function(){
        return moduleDevfest.speakers
    },    
    listerToutesLesSessions : function(){
        return moduleDevfest.sessions
    },    
    trouverUneSession : function(idSession){
        var session = (moduleDevfest.sessions.find(session => session.id == idSession))
        console.log(session.title)
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


