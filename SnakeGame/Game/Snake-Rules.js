class Rules{

    EatApple = function () {
       let AppleX = Math.round(Math.random()*14);
       let AppleY = Math.round(Math.random()*14);
       if(Snake.positionX === Apple.positionX && Snake.positionY === Apple.positionY){
           Apple.positionX = AppleX;
           Apple.positionY = AppleY;
           Snake.trail++;
       }
   }

   DrawTail=function(){
       Snake.tailX.push(Snake.positionX);
       Snake.tailY.push(Snake.positionY);
       console.log(Snake.tailX,"\n",Snake.tailY);
       if(Snake.tailX.length-1>Snake.trail){
        Snake.tailX.shift();
        Snake.tailY.shift();
       }
       
       ctx.fillStyle=Snake.color;
       for(let i=0;i<Snake.tailX.length;i++){
       ctx.fillRect(Snake.tailX[i]*54.5,Snake.tailY[i]*40,Snake.X,Snake.Y);
       }
    }

    BorderTouch=function(){
        if(Snake.positionX == 15 || Snake.positionX == -1 || Snake.positionY == 15 || Snake.positionY == -1)
        return isOver = true;
    }

    TailTouch=function(){
        for(let i = 1; i < Snake.tailX.length;i++){
                if(Snake.positionX === Snake.tailX[i-1] && Snake.positionY === Snake.tailY[i-1])
                return isOver = true;
        }
    }
  }