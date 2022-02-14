export default {
    stage: [{
            number: 0,
            playerPos: 76,
            noMask: [29, 34, 55, 80],
            pharmacie: 4,
            gel: 5,
            mask: [],
            virus: [],
            goal: -1,
            sick: -1
        }, {
            number: 1,
            playerPos: 0,
            noMask: [16, 39, 55, 80],
            pharmacie: 76,
            gel: 44,
            mask: [],
            virus: [],
            goal: -1,
            sick: -1
        }, {
            number: 2,
            playerPos: 80,
            noMask: [4, 28, 32, 52, 64],
            pharmacie: 0,
            gel: 8,
            mask: [],
            virus: [],
            goal: -1,
            sick: -1
        }
    ],
    score: 0,
    timer: 0,
    gel: 0,
    noMask: 0,
    virus: 0,
    introText: [
        "Bienvenue dans Tricky Project.",
        "Le but du jeu est simple : vous devez vous rendre à la pharmacie afin de recevoir votre dose de vaccin.",
        "Attention vous croiserez des personnes sans masque sur le chemin.",
        "Vous pouvez soit leur en donner un, soit les ignorer et aller droit à la pharmacie. Cette dernière option vous fera cependant perdre des points.",
        "Les masques chirurgicaux classiques ne vous protègent pas nécessairement du virus, ils servent avant tout à protéger les autres.",
        "Il se peut que certaines personnes soient porteuses du virus, faites donc attention à ne pas l'attraper vous-même.",
        "Vous l'attraperez si vous vous trouvez dans une case adjacente au virus.",
        "Si vous en apercevez un, patientez quelques instants et il disparaîtra.",
        "Attraper le virus correspondant à une dose de vaccin, l'attraper vous fera passer au niveau suivant mais votre score final chutera drastiquement.",
        "Afin de lutter contre la pandémie, distribuons des masques à ceux qui n'en ont pas et n'oublions pas le gel hydroalcoolique avant d'entrer dans un bâtiment.",
        "Au bout de 3 doses vous aurez gagné votre pass vaccinal ! À vous les joies du restaurant et du cinéma !",
        "Bonne chance !"
    ]
}