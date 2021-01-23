	document.getElementById('arcCanvas').getContext('2d');

	var circle = document.getElementById("arcCanvas");

	var ctx1 = circle.getContext('2d');

	ctx1.strokeStyle="lightgreen"; //circler outline color
	ctx1.beginPath();
	ctx1.arc(140,140,100,0*Math.PI,Math.PI*1.5,true); //values x,y,r,sAngle,eAngle,counterclockwise
	/*
	 x = horizontal distance from left to the center of the circle 
	 y = vertical distance from top to the center of the circle
	 sAngle = 
	 eAngle = 
	 counterclockwise = 
	*/
	ctx1.lineWidth=50; // circle outline's width
	ctx1.stroke();  //used to daw the outline
	ctx1.fillStyle="darkgreen"; //circle color
	ctx1.fill(); //used to daw the outline
