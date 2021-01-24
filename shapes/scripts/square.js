/*First of all, you must find the <canvas> element.
This is done by using the HTML DOM method getElementById():
*/
var canvas = document.getElementById("myCanvas");

/*Secondly, you need a drawing object for the canvas.
The getContext() is a built-in HTML object, with properties and 
methods for drawing*/
var ctx = canvas.getContext("2d");

//Finally, you can draw on the canvas.
ctx.fillStyle = "purple"; 
// fillStyle property can be a color, gradiente, or apttern
// the black color is default

ctx.fillRect(100,100,75,75);
//the fillRect(x,y,width,height) method draws a rectangle