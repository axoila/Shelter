function write(canvas, text){
    var ctx = canvas.getContext('2d');
    ctx.font="10px Verdana";
    ctx.fillStyle="white";
    ctx.fillText(text, 0, 8);
}

var names = document.getElementsByClassName("name");
for(i=0;i<names.length;i++){
    write(names[i], "Gunter");
    console.log(names[i]);
}
