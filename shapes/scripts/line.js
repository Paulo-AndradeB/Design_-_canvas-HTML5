/*First of all, you must find the <canvas> element.
This is done by using the HTML DOM method getElementById():
*/
var myHtmlCanvas = document.getElementById("lineCanvas");

/*Secondly, you need a drawing object for the canvas.
The getContext() is a built-in HTML object, with properties and 
methods for drawing*/
var linha = myHtmlCanvas.getContext("2d");

//Finally, you can draw on the canvas.

/*To draw the line, you must use one of the 'ink' methods, like stroke()
moveTo(x,y) - defines the starting point of the line
lineTo(x,y) - defines the ending point of the line
Remember that The THML canvas is a two-dimensional grid.
The upper-left corner of the canvas has the coordinates(o,o). 
it means: x=0, and y=0
*/

linha.lineWidth=10;
linha.strokeStyle="blue";
linha.moveTo(10,50);
linha.lineTo(200,50);
linha.stroke();
