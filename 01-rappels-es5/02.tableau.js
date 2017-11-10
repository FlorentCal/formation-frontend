var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans']

villes.forEach(
    function(ville){
        console.log(ville)
    }
)

var lettreADansToutesLesVilles = villes.every(
    function(ville){
        return ville.includes('a')
    }
)
console.log('lettreADansToutesLesVilles == ', lettreADansToutesLesVilles)

var auMoinsUneVilleAvecUnTiret = villes.some(
    function(ville){
        return ville.includes('-')
    }
)
console.log('auMoinsUneVilleAvecUnTiret == ', auMoinsUneVilleAvecUnTiret)

villesSansTiretSansEspace = villes.filter(
    function(ville){
        return (!ville.includes('-')) && (!ville.includes(' '))
    }
)
console.log('villesSansTiretSansEspace == ', villesSansTiretSansEspace)

villesMajusculeSeTerminantParS = villes.filter(
    function(ville){
        return (ville.slice(-1) == 's')
    }
).map(
    function(ville){
        return ville.toUpperCase()
    }
)
console.log('villesMajusculeSeTerminantParS == ', villesMajusculeSeTerminantParS)