var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans']

villes.forEach(ville => console.log(ville))

var lettreADansToutesLesVilles = villes.every(ville => ville.includes('a'))
console.log('lettreADansToutesLesVilles == ', lettreADansToutesLesVilles)

var auMoinsUneVilleAvecUnTiret = villes.some(ville => ville.includes('-'))
console.log('auMoinsUneVilleAvecUnTiret == ', auMoinsUneVilleAvecUnTiret)

villesSansTiretSansEspace = villes.filter(ville => (!ville.includes('-')) && (!ville.includes(' ')))
console.log('villesSansTiretSansEspace == ', villesSansTiretSansEspace)

villesMajusculeSeTerminantParS = villes.filter(ville => ville.slice(-1) == 's')
                                        .map(ville => ville.toUpperCase())
console.log('villesMajusculeSeTerminantParS == ', villesMajusculeSeTerminantParS)