var slider_img = document.querySelector('.slider-img');
var images = ['0.jpg', '00.jpg', '0000000.jpg', '0.png', '1.jpg','01.jpg','01111.jpeg','2015.jpeg','11.jpg','CIVIL_JOBERS.jpg','hcl.jpeg','clg.jpg'];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "images/"+images[i]);
	
}