# Kata_DrawMyPen

Objectif :

✏️ Crée une fonction `drawMyPen(){:js}` qui retourne l'état de ton crayon en ASCII Art en fonction du temps passé en cours.

Attention, petite subtilité : la gomme a deux étages en début d'année scolaire, mais se réduit à un seul étage à partir du mois de mars.

Exemples :

drawMyPen('mars');
// retourne un crayon à 4 étages avec une gomme à 1 étage
 /\
/__\
||||
||||
||||
||||
|__|
|__|

drawMyPen('fevrier');
// retourne un crayon à 5 étages avec une gomme à 2 étages
 /\
/__\
||||
||||
||||
||||
||||
|__|
|  |
|__|


Annexe : 
const calendrierDuCrayon = {
    septembre: 10,
    octobre: 9,
    novembre: 8,
    decembre: 7,
    janvier: 6,
    fevrier: 5,
    mars: 4,
    avril: 3,
    mai: 2,
    juin: 1,
};
