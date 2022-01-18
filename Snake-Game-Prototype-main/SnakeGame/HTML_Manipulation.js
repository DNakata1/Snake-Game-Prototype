class Draw_Settings{
HtmlMaker(){
let draw = document.getElementById("setting-panel");
let bar = document.getElementById("bar");
draw.classList.add("setting-menu");
bar.classList.add("setting-bar");

}
Active(){
let ButtonSettings = document.getElementById("settings");
ButtonSettings.addEventListener("click",this.HtmlMaker);
 }
}
var draw = new Draw_Settings();
draw.Active();