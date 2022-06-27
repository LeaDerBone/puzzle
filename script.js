let rows = 5;
let columns = 5;
let current;
let other;
let turns = 0;

window.onload = function() {
    for(let i=0;i < rows; i++){
        for(let j=0; j < columns; j++){
            let tile = document.createElement("img");
            tile.src = "blank.jpg";

            tile.addEventListener("dragstart", dragStart); 
            tile.addEventListener("dragover", dragOver);   
            tile.addEventListener("dragenter", dragEnter); 
            tile.addEventListener("dragleave", dragLeave); 
            tile.addEventListener("drop", dragDrop);      
            tile.addEventListener("dragend", dragEnd);  

            document.getElementById("board").append(tile);
        }
    }
    let pieces = [];
    for(let i=1; i <= rows*columns; i++){
        pieces.push(i.toString());
    }
    pieces.reverse();
    for(let i=0; i < pieces.length; i++){
        let j = Math.floor(Math.random() * pieces.length);
        let tmp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = tmp; 
    }
    for(let i=0; i < pieces.length; i++){
        let tile = document.createElement("img");
        tile.src =  pieces[i] + ".jpg";

        tile.addEventListener("dragstart", dragStart); 
        tile.addEventListener("dragover", dragOver);   
        tile.addEventListener("dragenter", dragEnter); 
        tile.addEventListener("dragleave", dragLeave); 
        tile.addEventListener("drop", dragDrop);      
        tile.addEventListener("dragend", dragEnd);      

        document.getElementById("pieces").append(tile);
    }
}
function dragStart() {
    current = this;
}
function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    other = this; 
}
function dragEnd() {
    if (current.src.includes("blank")) {
        return;
    }
    let currentimg = current.src;
    let otherimg = other.src;
    current.src = otherimg;
    other.src = currentimg;

    turns++;
    document.getElementById("turns").innerText = turns;
}
