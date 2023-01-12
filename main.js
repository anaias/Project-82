canvas =
document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent="empty";
canvas.addEventListener("mousedown", mymousedown);

function my_mouse_down(e)
{
color = document.getElementById("color").value;
width = document.getElementById("width").value;
radius = document.getElementById("radius").value;
mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e) 
{

    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e) 
{
    mouseEvent="mouseleave";

}

canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e)
{
MouseEvent = "mouseleave";

current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
  current_position_of_mouse_y=e.clientY-canvas.offsetTop;

if (mouseEvent=="mousedown") {
    console.log("Current position of x and y coordinates = ");
    console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0 , 2 * Math.PI);
    ctx.stroke();
}
}