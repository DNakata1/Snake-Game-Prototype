
class Draw_Settings{

HtmlMaker(){
let draw = document.getElementById("setting-panel");
draw.classList.add("setting-menu");

let bar = document.getElementById("bar");
bar.classList.add("setting-bar");

function ControlSelector(){
    let controls = document.getElementById("controls");
    controls.classList.add("setting-option");
    
  }
ControlSelector();
}

Active=function(){
let ButtonSettings = document.getElementById("settings");
ButtonSettings.addEventListener("click",this.HtmlMaker);
 }
}
var draw = new Draw_Settings();
draw.Active();