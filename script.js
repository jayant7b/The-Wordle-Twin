var height = 6;
var width = 5;

var row = 0, col = 0;

window.onload = function(){
    intialize();
}

function intialize(){
    //create game board
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            //<span id = "0_0" class = "tile"> </span>
            let tile = document.createElement("span");
            tile.id = r.toString() + "_" + c.toString();
            tile.classList.add("tile");
            //tile.innerText = "P";
            document.getElementById("board").appendChild(tile);
        }
    }
}