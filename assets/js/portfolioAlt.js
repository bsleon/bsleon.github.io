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
// var resetPressed = false;

// $(".reset-board").on('click', function(){
// 	// resetPressed = true;
// 	board = ChessBoard('board', cfg);
// 	game.reset();
// 	renderMoveHistory("");
// });

//****************************************************************************************
	//set active links when scrolling
	// $(document).ready(function () {
	// 	var url = window.location;
	// 	$('ul.nav a[href="'+ url +'"]').parent().addClass('active');
	// 	$('ul.nav a').filter(function() {
	// 		return this.href == url;
	// 	}).parent().addClass('active');
	// });


    // Basice Code keep it 
    $(document).ready(function () {
        $(document).on("scroll", onScroll);

        //smoothscroll
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");

            $('a').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');

            var target = this.hash,
                menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top+2
            }, 500, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
    });

// Use Your Class or ID For Selection 

    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('ul.nav a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('ul.nav li a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    }


    //change light and dark themes
    var isDay = false;
    $(document).ready(function () {
    	$(".slider").on('click', function(){

			//$("body").css("background", "black");
			$("body").toggleClass("dayColors");
			$(".navbar-inverse").toggleClass("navbarDay");
			$(".footer").toggleClass("footer-day");


			// alert(window.location.hash);
			isDay = !isDay;
			if(isDay){
				$(".fa-sun").css("-webkit-text-fill-color", "#e8d653");
				$(".fa-moon").css("-webkit-text-fill-color", "#bbbbbb");
				//$(".slider:before").css("color","#000000");
				$("a").css("background-color", "rgb(0,0,0,0)");
				$(".navbar-inverse .navbar-nav > .active > a").css("background-color", "#93e0fb");
				// $(".navbar-inverse .navbar-nav > .active > a").css("border-radius", "15% 15% 0 0");
				//$(this).css("background-color", "#93e0fb");
			}
			else{
				$(".fa-sun").css("-webkit-text-fill-color", "#bbbbbb");
				$(".fa-moon").css("-webkit-text-fill-color", "#5e6fd1");
				$("a").css("background-color", "rgb(0,0,0,0)");
				$(".navbar-inverse .navbar-nav > .active > a").css("background-color", "rgb(14,32,50,.9)");
				// $(".navbar-inverse .navbar-nav > .active > a").css("border-radius", "15% 15% 0 0");
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
    			$("a").css("background-image", "none");
    			$(this).css("background-color", "#93e0fb");
    			//$(this).css("background-image", 'url(assets/images/texture.png)');
    			// $(this).css("border-radius", "15% 15% 0 0");
    		}
    		else{
    			// $("a").css("background-color", "rgb(0,0,0,0)");
    			// $(this).css("background-color", "#1e3148");
    			// $(this).css("border-radius", "15% 15% 0 0");
    			// $(this).css("box-shadow", "inset 0 0 30px black;");
    			$("a").css("background-color", "rgb(0,0,0,0)");
    			$("a").css("background-image", "none");
    			$(this).css("background-color", "rgb(14,32,50,.9)");
    			//$(this).css("background-image", 'url(assets/images/texture.png)');
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

    // BOOTSTRAP LIGHTBOX
    $(document).ready(function () {
    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox();
            });
    });



 //    //CHESS
 //    // var board = ChessBoard("board", "start");
 //    var board,
	//   game = new Chess();

	// // do not pick up pieces if the game is over
	// // only pick up pieces for White
	// var onDragStart = function(source, piece, position, orientation) {
	//   if (game.in_checkmate() === true || game.in_draw() === true ||
	//     piece.search(/^b/) !== -1) {
	//     return false;
	//   }
	// };

	// var makeRandomMove = function() {
	//   var possibleMoves = game.moves();

	//   // game over
	//   if (possibleMoves.length === 0) return;

	//   var randomIndex = Math.floor(Math.random() * possibleMoves.length);
	//   game.move(possibleMoves[randomIndex]);
	//   board.position(game.fen());
	// };

	// var onDrop = function(source, target) {
	//   // see if the move is legal
	//   var move = game.move({
	//     from: source,
	//     to: target,
	//     promotion: 'q' // NOTE: always promote to a queen for example simplicity
	//   });

	//   // illegal move
	//   if (move === null) return 'snapback';

	//   // make random legal move for black
	//   window.setTimeout(makeRandomMove, 250);
	// };

	// // update the board position after the piece snap
	// // for castling, en passant, pawn promotion
	// var onSnapEnd = function() {
	//   board.position(game.fen());
	// };

	// var cfg = {
	//   draggable: true,
	//   position: 'start',
	//   onDragStart: onDragStart,
	//   onDrop: onDrop,
	//   onSnapEnd: onSnapEnd
	// };
	// board = ChessBoard('board', cfg);

    // var Chess = require('./chess').Chess;
	// var chess = new Chess();

	// while (!chess.game_over()) {
	//   var moves = chess.moves();
	//   var move = moves[Math.floor(Math.random() * moves.length)];
	//   chess.move(move);
	// }
	// console.log(chess.pgn());


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

