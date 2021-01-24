
	var circle = document.getElementById("arcCanvas");

	var ctx1 = circle.getContext('2d');

	//Creat gradient
	var grd = ctx1.createRadialGradient(180,180,100,-15,50,20)
	grd.addColorStop(0,"#ffd700");
	grd.addColorStop(1,"white");

	
	//Create a circle
	ctx1.beginPath();
	ctx1.arc(180,180,100,0,Math.PI*2,true); 

	//Create shadow
	ctx1.shadowBlur = 100;
	ctx1.shadowColor = "yellow";

	ctx1.fillStyle=grd; 
	ctx1.fill();
	
	


