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

// Iterative Way

function drawMyPen(month){
    const firstMonths = ["septembre", "octobre", "novembre", "decembre", "janvier", "fevrier"];
    const lastMonths = ["mars", "avril", "mai", "juin"];
    const floor = "||||";
    let numberOfFloor = calendrierDuCrayon[month];

    drawTipPen();

    for (let i = 0; i< numberOfFloor; i++){
        console.log(floor);
    }; 

    if (firstMonths.includes(month)){
        drawSeptToFebEraser();
    } else if (lastMonths.includes(month)){
        drawMarsToJuneEraser();
    }
}

/* drawMyPen('septembre');
drawMyPen('fevrier');
drawMyPen('mars');
drawMyPen('juin'); */

//Recursive Way 

function drawFloorsRec(numberOfFloor){
    const floor = "||||";
    
    if (numberOfFloor == 0){
        return
    } else {
        console.log(floor);
        numberOfFloor --;
        drawFloorsRec(numberOfFloor);
    }
}


function drawMyPenRec(month){
    const firstMonths = ["septembre", "octobre", "novembre", "decembre", "janvier", "fevrier"];
    const lastMonths = ["mars", "avril", "mai", "juin"];
    let numberOfFloor = calendrierDuCrayon[month];
 
    drawTipPen();

    drawFloorsRec(numberOfFloor);

    if (firstMonths.includes(month)){
        drawSeptToFebEraser();
    } else if (lastMonths.includes(month)){
        drawMarsToJuneEraser();
    }
}

drawMyPenRec('septembre');
drawMyPenRec('fevrier');
drawMyPenRec('mars');
drawMyPenRec('juin');


function displayTheEnd(){
    console.log(` _____ ___ _   _   ____  _   _   _  __    _   _____  _      _  
|  ___|_ _| \\ | | |  _ \\| | | | | |/ /   / \\ |_   _|/ \\    | | 
| |_   | ||  \\| | | | | | | | | | ' /   / _ \\  | | / _ \\   | | 
|  _|  | || |\\  | | |_| | |_| | | . \\  / ___ \\ | |/ ___ \\  |_| 
|_|   |___|_| \\_| |____/ \\___/  |_|\\_\\/_/   \\ _\\_/_/   \\_\\ (_)`)
}

displayTheEnd()