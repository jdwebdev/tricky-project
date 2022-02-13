export default {
    stage: [{
            number: 0,
            playerPos: 76,
            noMask: [28, 29, 32, 34],
            pharmacie: 4,
            gel: 5,
            mask: [],
            virus: [],
            goal: -1
        }, {
            number: 1,
            playerPos: 77,
            noMask: [27, 39, 0, 32],
            pharmacie: 1,
            gel: 3,
            mask: [],
            virus: [],
            goal: -1
        }, {
            number: 2,
            playerPos: 78,
            noMask: [20, 30, 40, 16],
            pharmacie: 8,
            gel: 12,
            mask: [],
            virus: [],
            goal: -1
        }
    ],
    introText: [
        "Bienvenue dans Tricky Project",
        "Le but du jeu est simple : vous devez vous rendre à la pharmacie afin de recevoir votre dose de vaccin.",
        "Attention vous croiserez des personnes sans masques sur le chemin.",
        "Vous pouvez soit leur en donner un, soit les ignorer et aller droit à la pharmacie. Cette dernière option vous fera cependant perdre des points.",
        "Les masques chirurgicaux classiques ne vous protègent pas nécessairement du virus, il sert avant tout à protéger les autres.",
        "Il se peut que certains personnes soient porteuses du virus, faites donc attention de ne pas l'attraper vous-mêmes.",
        "Vous l'attraperez si vous vous retrouvez dans une case adjacente au virus.",
        "Si vous en apercevez un, patientez quelques instant et il disparaîtra.",
        "Attraper le virus correspondant à une dose de vaccin, l'attraper vous fera passer au niveau suivant mais votre score final chutera drastiquement.",
        "Afin de lutter contre la pandémie, distribuons des masques à ceux qui n'en ont pas et n'oublions pas le gel hydroalcoolique avant d'entrer dans un bâtiment.",
        "Au bout de 3 doses vous aurez gagné votre pass vaccinal ! À vous les joies du restaurant et du cinéma !",
        "Bonne chance !"
    ]
}