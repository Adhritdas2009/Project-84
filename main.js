canvas= document.getElementById('myCanvas');
ctx=canvas.getContext("2d")

window.addEventListener("keydown", my_keydown)

function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if((keypressed>=97 && keypressed<=122)|| (keypressed>=65) && keypressed<=90){
        alphabet();
        document.getElementById("d1").innerHTML="you pressed an alphabet key";
        console.log("alphabet key")
    }
}

function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if((keypressed>=97 && keypressed<=122)|| (keypressed>=65) && keypressed<=90){
        number();
        document.getElementById("d1").innerHTML="you pressed a number key";
        console.log("alphabet key")
    }
}
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if((keypressed>=97 && keypressed<=122)|| (keypressed>=65) && keypressed<=90){
        special();
        document.getElementById("d1").innerHTML="you pressed a special key";
        console.log("alphabet key")
    }
}
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if((keypressed>=97 && keypressed<=122)|| (keypressed>=65) && keypressed<=90){
        arrow();
        document.getElementById("d1").innerHTML="you pressed an arrow key";
        console.log("alphabet key")
    }
}
function alphabet(){
    img_image="Alpkey.png";
    document.getElementById(img_image).value;
    add();
}


function number(){
    img_image="numkey.png";
    document.getElementById(img_image).value;
    add();
}
function special(){
    img_image="spkey.png";
    document.getElementById(img_image).value;
    add();
}
function arrow(){
    img_image="Arrkey.png";
    document.getElementById(img_image).value;
    add();
}

var a = "alphabet"
var b = "number"
var c = "special"
var d = "arrow"

function add(){
    document.getElementById("myCanvas").value="a"
}
function add(){
    document.getElementById("myCanvas").value="b"
}
function add(){
    document.getElementById("myCanvas").value="c"
}
function add(){
    document.getElementById("myCanvas").value="d"
}
