
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
   // Définir ici les attributs de la 'classe'
   // Developper les 3 fonctions gérant les événements
   // Associer les fonctions précédentes aux évènements du canvas.

   var xPosStart = 0;
   var yPosStart=0;
   var xPosEnd=0;
   var yPosEnd=0
   var Position;
   var mouseClicked = false;
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};

function click(evt){
    if(!mouseClicked){
        mouseClicked = true;
        var result = getMousePosition(canvas, evt);
        xPosStart = result.x;
        yPosStart = result.y;
        console.log("Departure : "+ xPosStart + " " + yPosStart".");
    }
}.bind(this)


function dragElement(evt){
    if(mouseClicked){
        var result = getMousePosition(canvas,evt);
        xPosEnd = result.x;
        yPosEnd = result.y;
        console.log("Moving : " + xPosEnd + " " + yPosEnd+".");
    }
}.bind(this)

function dropElement(evt){
    if(mouseClicked){
        var result = getMousePosition(canvas,evt);
        xPosEnd = result.x;
        yPosEnd = result.y;
        console.log("End : " + xPosEnd + " " + yPosEnd+".");
    }
    mouseClicked = false;
}.bind(this)


