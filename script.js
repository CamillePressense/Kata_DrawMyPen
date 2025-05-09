//Crée une fonction drawMyPen(){:js} qui retourne l'état de ton crayon en ASCII Art en fonction du temps passé en cours. 
// Tu trouveras un exemple de crayons ci-dessous. Attention, petite subtilité : la gomme a deux étages en début d'année scolaire, 
// mais se réduit à un seul étage à partir du mois de mars.

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

function drawTipPen(){
    const pentip = ` /\\
/__\\`;
                
    console.log(pentip);
}


function drawMarsToJuneEraser(){
    const usedEraser = `|__|
|__|`;
    console.log(usedEraser);
}

function drawSeptToFebEraser(){
    const newEraser = `|__|
|  |
|__|`;
     console.log(newEraser);
}

function drawSeptToFebPen(){
    drawTipPen();
    drawSeptToFebEraser();
}

function drawMarsToJunePen(){
    drawTipPen();
    drawMarsToJuneEraser();
}



drawSeptToFebPen()
drawMarsToJunePen()

