var board;
var score = 0;
var rows = 0;
var columns = 0;

window.onload = function(){
    setGame();
}
function setGame(){
    board=[
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ]
    for (let r = 0;r < rows; r++){
        for(let c = 0;c <columns;c++){
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            let num = board[r][c];
            updateTile(tile, num);
            document.getElementById("board").append(tile);
        }
    }
}
function updateTile(tile, num){
    tile.innerText = "";
    tile.classList.value = "";
    tile.classList.add("tile");
    if(num > 0){
        tile.innerText=num;
        if(num <= 4096){
            tile.classList.add("x"+num.toString());
        }
        else{
            tile.classList.add("x8192")
        }
    }
}

document.addEventListener("keyup",(e) => {
    if(e.code == "ArrowLeft"){
        slideleft();
    }
})

function filterZero(row){
    return row.filter(num => num != 0);
}
function slide(){
    row = filterZero(row);
    for(let i=0; i<row.length-1;i++){
        if(row[i]== row[i+1]){
            row[i] *=2;
            row[i+1] =0;
            score +=row[i];

        }
    }
    row = filterZero(row);

    while(row.length < column){
        row.push(0);
    }
    return row;
}
function slideleft(){
    for(let r=0; r< rows; r++){
        let row = board[r];
        row = slide(row)
        board[r]= row;

        for
    }


}