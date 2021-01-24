
	var circle = document.getElementById("arcCanvas");

	var ctx1 = circle.getContext('2d');

	//Creat gradient
	var grd = ctx1.createRadialGradient(140,140,100,-15,50,20)
	grd.addColorStop(0,"black");
	grd.addColorStop(1,"white");

	//Create shadow
	ctx1.shadowBlur = 80;
	ctx1.shadowOffsetX = 70;
	ctx1.shadowOffsetY = 50;
	ctx1.shadowColor = "black";

	//Create a circle
	ctx1.beginPath();
	ctx1.arc(140,140,100,0,Math.PI*2,true); 
	ctx1.fillStyle=grd; 
	ctx1.fill();

	
	
	
	


