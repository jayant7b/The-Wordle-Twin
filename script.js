// grid size
var height = 6;
var width = 5;

// cursor index
var row = 0, col = 0;

var gameOver = false;

window.onload = function(){
    intialize();
}

function intialize(){
    // create game board
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            // creates: <span id = "0_0" class = "tile"> </span>
            let tile = document.createElement("span");
            tile.id = r.toString() + "_" + c.toString();
            tile.classList.add("tile");
            //tile.innerText = "P";
            document.getElementById("board").appendChild(tile);
        }
    }
}

// checks if wordList contains word; gets input word as paramter
function isValidWord(){
    // TODO: checks if wordList contains word; gets input word as paramter
    return true;
}

// process word to display color coding
function update(){
    // TODO: process word to display color coding; get input word as parameter
}

// TODO snippet: to use later
function getWord(){
    var word = "";
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + "_" + c.toString());
        word += currTile.innerText.toString();
    }
    return word;
}

// keydown makes 'aaaaa' input possible
document.addEventListener("keyup", (ev) => {
    if(gameOver){
        return;
    }

    //TODO: skip for ctrl+r; ctrl+z; other combinations
    //alert(ev.code);

    // A-Z, Enter, Del allowed
    // user input A-Z
    if(ev.code >= "KeyA" && ev.code <= "KeyZ"){

        // input
        if(col < width){
            // if current tile is blank, input
            let currTile = document.getElementById(row.toString() + "_" + col.toString());
            if(currTile.innerText == ""){
                // 'A' of "keyA"
                currTile.innerText = ev.code[3];
                currTile.classList.add("entered");
                col++;
            }
        }
    }
    // Del last input letter
    else if(ev.code == "Backspace"){
        if(col <= width && col > 0){
            col--;
            let currTile = document.getElementById(row.toString() + "_" + col.toString());
            currTile.innerText = "";
            currTile.classList.replace("entered", "blank");
        }
    }
    // submit answer; goto next column
    else if(ev.code == "Enter"){
        if((col == width) && isValidWord()){
            update();
            row++;
            col = 0;
        }
        else{
            // TODO: proper alert popup
            alert("Not enough letters");
        }
    }

    // six failed attempts
    if(!gameOver && row == height){
        gameOver == true;
    }
})