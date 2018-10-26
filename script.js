var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

/*POPUP*/

function openForm() {
    document.getElementById("myForm").style.display = "block";
	$('.btn-danger').tooltip.hide();
	$('.btn-warning').tooltip.hide();
	$('#submit').focus();
}



function submitForm() {
	
	var x = document.forms["validateForm"]["fname"].value;
	var y = document.forms["validateForm"]["emails"].value;
	
	var letters = /^[a-zA-Z\s]+$/;
	var atpos = y.indexOf("@");
    var dotpos = y.lastIndexOf(".");
	     
	 if(x.match(letters))
      {
		
		
		if (atpos<1 || dotpos<atpos+2 || dotpos+2>=y.length) {
			$('.btn-warning').tooltip({title: "Not a valid e-mail address", placement: "left"}); 
			document.getElementById("emailsubmit").value='';
			document.getElementById("emailsubmit").focus();
        return false;
		
      }
		  
	  
      }
	 else
		  {
		  $('.btn-danger').tooltip({title: "Please input alphabet characters and spaces only", trigger: "focus", placement: "left"});
		  document.getElementById("submit").value='';
		  document.getElementById("submit").focus();
		  return false;
		  }
	
    document.getElementById("submit").value='';
	document.getElementById("emailsubmit").value='';
	alert("The information was sent");
	document.getElementById("myForm").style.display = "none";
}

function closeForm() {
	document.getElementById("submit").value='';
	document.getElementById("emailsubmit").value='';
	document.getElementById("myForm").style.display = "none";
}

/*POPUP END*/

function on() {
	window.open("read.html", "_blank");
    /*document.getElementById("overlay").style.display = "block";*/
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

function shoTooltip() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

/*SLIDER*/

$(document).ready(function(){
    // Activate Carousel
    $("#myCarousel").carousel({interval: 5000});
    
    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
        $("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
        $("#myCarousel").carousel(2);
    });
    $(".item4").click(function(){
        $("#myCarousel").carousel(3);
    });
    
    // Enable Carousel Controls
    $(".left").click(function(){
        $("#myCarousel").carousel("prev");
    });
    $(".right").click(function(){
        $("#myCarousel").carousel("next");
    });
});

/*SLIDER END*/