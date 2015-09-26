
var seconds = 0;
var audio = new Audio('music/sunny.mp3');

window.onload=function(){

	audio.play();
	window.setInterval(function(){
	seconds +=0.5;

	if(seconds==2){
		document.getElementById("girl-container-1").setAttribute("id", "girl-container-2");
	}
	if (seconds==7) {
		document.getElementById("girl-container-2").setAttribute("id", "girl-container-3");
		document.getElementById("text-reader").innerHTML = "First, there was <strong><span style='color:white'>one</span></strong>."
		

	}
	if(seconds==10){
			//Flip Image
			document.getElementById("girl-container-3").setAttribute("id", "girl-container-4");
			document.getElementById("boy-container-1").setAttribute("id", "boy-container-2");
			
	}
	if(seconds==18){
		document.getElementById("boy-container-2").setAttribute("id", "boy-container-3");
		document.getElementById("text-reader").innerHTML = "Later, there were  <strong><span style='color:white'>two</span></strong>."
	}
	if(seconds==21){
		document.getElementById("boy-container-3").setAttribute("id", "boy-container-4");
		document.getElementById("girl-container-4").setAttribute("id", "girl-container-5");
	}
	if(seconds==23){
		document.getElementById("boy-container-4").setAttribute("id", "boy-container-5");
		document.getElementById("text-reader").innerHTML = "And then....."
	}
	if(seconds==24){
		document.getElementById("baby-container-1").setAttribute("id", "baby-container-2");
	}
	if(seconds==28){
		document.getElementById("boy-container-5").setAttribute("id", "boy-container-4");

	}
	if(seconds==29){
		document.getElementById("text-reader").innerHTML = "There were  <strong><span style='color:white'>THREE</span></strong>."
	}
	if(seconds==31){
		document.getElementById("boy-container-4").setAttribute("id", "boy-container-6");
		document.getElementById("baby-container-2").setAttribute("id", "baby-container-3");
	}
	


		}, 500);


}


