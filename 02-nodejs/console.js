var moduleService = require('./service.js');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

var menus = {
    '1' : {
        libelle : 'Liste de tous les présentateurs',
        execute : function() {
            moduleService.speakerDisplay(moduleService.listerTousLesPresentateurs())
        }
    },
    '2' : {
        libelle : 'Top des présentateurs',
        execute : function() {
            moduleService.speakerDisplay(moduleService.listerTopPresentateurs())
        }
    },
    '3' : {
        libelle : 'Liste des sessions',
        execute : function() {
            moduleService.sessionDisplay(moduleService.listerToutesLesSessions())
        }
    },
    '4' : {
        libelle : 'Détail d\'une session',
        execute : function(){
            rl.question('Id de la session :\n', (line) => {
                moduleService.trouverUneSession(line)
                rl.prompt()
            })
        }
    },
    '99' : {
        libelle : 'Quitter',
        execute : function(){
            rl.close()
        }
    }
}
   
var menu = '*** Application Conférence ***\n'
var tab = []
for(option in menus){
    menu += option + '. ' + menus[option].libelle + '\n'
    tab[tab.length] = option
}

rl.setPrompt(menu)
rl.prompt()

rl.on('line', (line) => {

    if(tab.indexOf(line) == -1) {
        console.log('Choix invalide')
    } 
    else{
        menus[line].execute()
    }
   
    rl.prompt();
}).on('close', () => {
    console.log('Au revoir !');
    process.exit(0);
});


