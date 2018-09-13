// $("li").click(function(){
// 	$(this).css("color", "gray");
// 	$(this).css("text-decoration", "line-through");
// });

//check off specific todos by clicking
// $("li").click(function(){
// 	//if li is gray turn it black
// 	if($(this).css("color") === "rgb(128, 128, 128)"){
// 		$(this).css({
// 		color: "black",
// 		textDecoration: "none"
// 		});
// 	}
// 	//else turn it gray
// 	else {
// 		$(this).css({
// 		color: "gray",
// 		textDecoration: "line-through"
// 		});
// 	}

// });

// //check off specific todos by clicking
// $("ul").on("click", "li", function(){
// 	$(this).toggleClass("completed");
// });

// //click on X to delete todo
// $("ul").on("click", "span", function(event){
// 	$(this).parent().fadeOut(500, function(){
// 		$(this).remove();
// 	});
// 	event.stopPropagation(); //stop click event from bubble up to other areas
// });

// $("input[type='text']").keypress(function(event){
// 	if(event.which === 13){
// 		//grab new todo text from input
// 		var todoText = $(this).val();
// 		$(this).val("");
// 		//create a new li and add to ul
// 		$("ul").append("<li><span><i class='fa fa-trash-alt'></i></span>" + " " + todoText + "</li>");
// 	}
// });

// $(".fa-plus").click(function(){
// 	$("input[type='text']").fadeToggle(300);
// });
//var selector = ".navbar-inverse .navbar-nav > .active > a";
// $(".slider").click(function(){



	//set active links
	$(document).ready(function () {
		var url = window.location;
		$('ul.nav a[href="'+ url +'"]').parent().addClass('active');
		$('ul.nav a').filter(function() {
			return this.href == url;
		}).parent().addClass('active');
	});


    //change light and dark themes
    var isDay = false;
    $(document).ready(function () {
    	$(".slider").on('click', function(){

			//$("body").css("background", "black");
			$("body").toggleClass("dayColors");
			$(".navbar-inverse").toggleClass("navbarDay");

			// alert(window.location.hash);
			isDay = !isDay;
			if(isDay){
				$(".navbar-inverse .navbar-nav > .active > a").css("background-color", "#93e0fb");
				$(".navbar-inverse .navbar-nav > .active > a").css("border-radius", "15% 15% 0 0");
				//$(this).css("background-color", "#93e0fb");
			}
			else{
				$(".navbar-inverse .navbar-nav > .active > a").css("background-color", "#1e3148");
				$(".navbar-inverse .navbar-nav > .active > a").css("border-radius", "15% 15% 0 0");
				//$(this).css("background-color", "#1e3148");
			}

			// $(selector).toggleClass("activeNavDay");
			// selector.style.background = "black";

		});
    });

    var offset = 75;
    //navbar link selected attributes
    $(document).ready(function () {
    	// $("a").click(function(){
    	$(".navbar li a").on('click', function(event){
    		if(isDay){
    			// $("a").css("background-color", "rgb(0,0,0,0)");
    			// $(this).css("background-color", "#93e0fb");
    			// $(this).css("border-radius", "15% 15% 0 0");
    			$("a").css("background-color", "rgb(0,0,0,0)");
    			$(this).css("background-color", "#93e0fb");
    			$(this).css("border-radius", "15% 15% 0 0");
    		}
    		else{
    			// $("a").css("background-color", "rgb(0,0,0,0)");
    			// $(this).css("background-color", "#1e3148");
    			// $(this).css("border-radius", "15% 15% 0 0");
    			// $(this).css("box-shadow", "inset 0 0 30px black;");
    			// $("a").css("background-color", "rgb(0,0,0,0)");
    			// $(this).css("background-color", "rgb(44,62,80,.9)");
    			// document.getElementById(this.parent).style.display = 'none';
    			// document.getElementById(this.parent).style.display = 'block';

    		}

    		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 400, function(){
				window.location.hash = hash;
			});
			//window.location.hash = hash;
			}

    	});
    });


// $(".navbar-inverse").on("click", function(){
//   $(".navbar-nav").find(".active").removeClass("active");
//   $(this).parent().addClass("active");
// });

// var offset = 80;

// $('.navbar li a').click(function(event) {
//     event.preventDefault();
//     $($(this).attr('href'))[0].scrollIntoView();
//     scrollBy(0, -offset);
// });

// var offset = 75;

//scroll page to the link
// $(document).ready(function () {

// 	$(".navbar li a").on('click', function(event) {
// 		if (this.hash !== "") {
// 			event.preventDefault();
// 			var hash = this.hash;
// 			$('html, body').animate({
// 				scrollTop: $(hash).offset().top
// 			}, 400, function(){
// 				window.location.hash = hash;
// 			});
// 			//window.location.hash = hash;
// 		}
		
// 	});
// });


//scroll back to the top on home
// $(document).ready(function() {
// 	var offset = 250;
// 	var duration = 300; 
// 	jQuery(window).scroll(function() { 
// if (jQuery(this).scrollTop() > offset) {
// jQuery(".back-to-top").fadeIn(duration);
// } else {
// jQuery(".back-to-top").fadeOut(duration);
// }
//});



// 	$(".back-to-top").click(function(event) {
// 		event.preventDefault();
// 		jQuery("html, body").animate({scrollTop: 0}, duration);
// 		return false;
// 	}) 
// });

