const canvas= document.getElementById('PlayGround');
const ctx = canvas.getContext('2d');
let MoveX=0,MoveY=0;

let isOver = false;

let Apple={
    positionX:Math.round(Math.random()*14),
    positionY:Math.round(Math.random()*14),
    color:"red",
    X:46,
    Y:35,
}
let Snake={
    positionX:7,
    positionY:7,
    color:"pink",
    X:46,
    Y:35,
    tailX: [],
    tailY: [],
    trail: 0
}
function Draw(){
    rules.EatApple();
    ChangingPosition();
    MakeMap();
    MapApple.ObjMapping();
    MapSnake.ObjMapping();
    rules.DrawTail();
    rules.TailTouch();
    rules.BorderTouch();
    setTimeout(GameOver, 1000/5);   
}
function GameOver(){
if(isOver == true) console.log("Game Over");
else Draw();                          
}
let rules = new Rules();
let MapApple = new Mapping(Apple);
let MapSnake = new Mapping(Snake);
function ChangingPosition(){
    Snake.positionX+=MoveX;
    Snake.positionY+=MoveY;
    console.log(Snake.positionX,Snake.positionY);
}
document.addEventListener("keydown",KeyPush);
function KeyPush(e){
    switch(e.keyCode){
    case 65:
        MoveX = -1;
        MoveY = 0;
        break;
    case 68:
       MoveX = 1;
       MoveY = 0;
         break; 
    case 87:
        MoveX = 0;
        MoveY = -1;
        break;
    case 83:
        MoveX = 0;
        MoveY = 1;
        break; 
    }
}
GameOver();