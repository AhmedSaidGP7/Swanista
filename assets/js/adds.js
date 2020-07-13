/*
$(window).load(function(){
	
	$(".overload").fadeOut(1700);
	
	
	
			
		
});


var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById(".overload").style.display = "none";
  
}
*/

var a = $("nav").offset().top;

$(document).scroll(function(){
    if($(this).scrollTop() > a)
    {   
       $('nav').css({"background":"rgba(0, 0, 0, 0.68)"});
    } else {
       $('nav').css({"background":"transparent"});
    }
});