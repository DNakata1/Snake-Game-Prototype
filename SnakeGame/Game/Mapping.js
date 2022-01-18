class Mapping{
   constructor(Obj){
    this.Obj = Obj;
   }
ObjMapping = function(){
    ctx.fillStyle=this.Obj.color;
    ctx.fillRect(this.Obj.positionX*54.5,this.Obj.positionY*40,this.Obj.X,this.Obj.Y);
  }
}
function MakeMap(){
    let y=[],x=[];
    y[14] = 0;
    x[14] = 0;
    for(let i=0;i<y.length;i++){
        for(let j=0;j<x.length;j++){
            ctx.fillStyle="green";
            ctx.fillRect(i*54.5,j*40,Apple.X,Apple.Y);
            }
        }
    }