/* eslint-disable no-undef */
// NOTE: this example uses the chess.js library:
// https://github.com/jhlywa/chess.js

var board = null;
// eslint-disable-next-line no-undef
var game = new Chess();
var $status = $("#status");
var $fen = $("#fen");
var $pgn = $("#pgn");

// eslint-disable-next-line no-unused-vars
function onDragStart(source, piece, position, orientation) {
	// do not pick up pieces if the game is over
	if (game.game_over()) return false;

	// only pick up pieces for the side to move
	if ((game.turn() === "w" && piece.search(/^b/) !== -1) ||
		(game.turn() === "b" && piece.search(/^w/) !== -1)) {
		return false;
	}
}

function onDrop(source, target) {
	// see if the move is legal
	var move = game.move({
		from: source,
		to: target,
		promotion: "q" // NOTE: always promote to a queen for example simplicity
	});

	// illegal move
	if (move === null) return "snapback";

	fensMaker(); //create a history of fens during normal play

	updateStatus();
}

// update the board position after the piece snap
// for castling, en passant, pawn promotion
function onSnapEnd() {
	board.position(game.fen());
}

function updateStatus() {
	var status = "";

	var moveColor = "White";
	if (game.turn() === "b") {
		moveColor = "Black";
	}

	// checkmate?
	if (game.in_checkmate()) {
		status = "Game over, " + moveColor + " is in checkmate.";
	}

	// draw?
	else if (game.in_draw()) {
		status = "Game over, drawn position";
	}

	// game still on
	else {
		status = moveColor + " to move";

		// check?
		if (game.in_check()) {
			status += ", " + moveColor + " is in check";
		}
	}

	$status.html(status);
	$fen.html(game.fen());
	$pgn.html(game.pgn());
}
//********EDIT HERE */***************/

//set options for board
var config = {
	sparePieces: false,
	showNotation: true,
	orientation: "white",
	draggable: true,
	position: "start",
	onDragStart: onDragStart,
	onDrop: onDrop,
	onSnapEnd: onSnapEnd
};

//initialize board with above config options
board = Chessboard("myBoard", config);
$(window).resize(board.resize);

jQuery("#myBoard").on("scroll touchmove touchend touchstart contextmenu", function (e) {
	e.preventDefault();
	// console.log("TESTING");
});
// jQuery(".square-55d63").children("img")[1].on("click drag scroll touchmove touchend touchstart contextmenu", function (e) {
// 	console.log("TESTING");
// 	e.preventDefault();
// });
// jQuery(".piece-417db").on("click drag scroll touchmove touchend touchstart contextmenu", function (e) {
// 	e.preventDefault();
// 	console.log("TESTING");
// });

//flip board
$("#flipBoardBtn").on("click", function () {
	if ($("#myBoard").is(":visible")) {
		board.flip();
	}
	else {
		setupBoard.flip();
	}

	// if (board.orientation() == "white")
	// 	console.log("white");
});

//Move History
// $("#moveHistoryBtn").on("click", function () {
// 	alert(game.history());
// });

//update fen and status
function updateFen() {
	$fen.html(game.fen()); //update game fen
	board.position(game.fen()); //update board fen
	updateStatus();
}

//*****PGN STUFF*********/
const pgn = [

	"[Event \"Paris\"]",
	"[Site \"Paris FRA\"]",
	"[Date \"1858.??.??\"]",
	"[EventDate \"?\"]",
	"[Round \"?\"]",
	"[Result \"1-0\"]",
	"[White \"Paul Morphy\"]",
	"[Black \"Duke Karl / Count Isouard\"]",
	"[ECO \"C41\"]",
	"[WhiteElo \"?\"]",
	"[BlackElo \"?\"]",
	"[PlyCount \"33\"]",
	"",
	"1.e4 e5 2.Nf3 d6 3.d4 Bg4 4.dxe5 Bxf3 5.Qxf3 dxe5 6.Bc4 Nf6 7.Qb3 Qe7",
	"8.Nc3 c6 9.Bg5 b5 10.Nxb5 cxb5 11.Bxb5+ Nbd7 12.O-O-O Rd8",
	"13.Rxd7 Rxd7 14.Rd1 Qe6 15.Bxd7+ Nxd7 16.Qb8+ Nxb8 17.Rd8# 1-0",
];

var index = 0;
var fens = [];
// var stop = true;

//loadPGN
$("#loadPgnBtn").on("click", function () {
	game.reset();
	game.load_pgn(pgn.join("\n"));
	updateFen();
	index = 0;
	fens = [];
	fensMaker();
});

function fensMaker() {
	var moves = game.history();
	var tmpGame = new Chess();
	var startingPos = tmpGame.fen();
	for (var i = 0; i < moves.length; ++i) {
		tmpGame.move(moves[i]);
		fens[i] = tmpGame.fen();
	}
	//add the start position
	fens.unshift(startingPos);

	index = fens.length;
}

// If Prev button clicked, move backward one
$("#prevBtn").on("click", function () {
	if (index == fens.length) --index;
	if (index > 0) {
		board.position(fens[--index]);
	}
	$fen.html(game.fen());
	//****UPDATE GAME FEN**************************************************************/
	updateStatus();
});

// If Next button clicked, move forward one
$("#nextBtn").on("click", function () {
	if (index < fens.length) {
		board.position(fens[++index]);
	}
	updateStatus();
});

// If Start button clicked, go to start position
$("#startPositionBtn").on("click", function () {
	board.position(fens[0]);
	index = 0;
	updateStatus();
});

// If End button clicked, go to end position
$("#endPositionBtn").on("click", function () {
	board.position(fens[fens.length - 1]);
	index = fens.length;
	updateStatus();
});

// Start a new Game
$("#newGameBtn").on("click", function () {
	fens = [];
	game.reset();
	board.position("start");
	updateStatus();
	$("#openingsList").prop("selectedIndex", 0);
	$("#openingsList").selectpicker("refresh");
});

// Undo Last Move
$("#undoMoveBtn").on("click", function () {
	game.undo();
	board.position(game.fen());
	updateStatus();
});

// Clear Board
$("#clearBoardBtn").on("click", function () {
	setupBoard.clear();
	game.load(setupBoard.fen() + " " + whosTurn() + " " + "KQkq - 0 1");
});

// Start Board
$("#startBoardBtn").on("click", function () {
	setupBoard.start();
	game.load(setupBoard.fen() + " " + whosTurn() + " " + "KQkq - 0 1");
});

function validateBoard(board) {
	game.load(setupBoard.fen());
	if (board.fen() === "8/8/8/8/8/8/8/8") {
		return false;
	}
	else {
		return true;
	}
}

//********************************TODO FIX THIS vvvvv*************************************
//setupBoard is not updating it's fen when the board changes before it's storing old fen into game.load

function setupOnChange(){
	console.log("Piece Dropped!");
	
	if (setupBoard.fen() === "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR") {
		//console.log("INITIAL POSITION!!!");
	}
	if(!validateBoard(setupBoard)){
		//console.log("not valid!");
		$("#setupBoardBtn").attr("disabled", "");
	}
	game.load(setupBoard.fen() + " " + whosTurn() + " " + "KQkq - 0 1");
}


// If Play button clicked, animate moves from current position until end
// $("#playBtn").on("click", async function () {
// 	stop = !stop;
// 	for (var i = index; i < fens.length; ++i) {
// 		if (!stop) {
// 			board.position(fens[i]);
// 			await sleep(1000);
// 		}
// 	}
// 	game.load(fens[1]);
// 	console.log(game.fen());
// });

// function sleep(ms) {
// 	return new Promise(resolve => setTimeout(resolve, ms));
// }

//#TODO
//add status as the moves are clicked, currently status stays stuck at checkmate
//this is because the game position in chess.js isnt updated, only the board.position in chessboard.js is


//add a board setup feature
var setupBoardFlag = false;
var fen;
var setupBoard;
const setupBoardButton = $("#setupBoardBtn");
setupBoardButton.click(function () {
	// $("#setupModal").modal("toggle");

	if (!setupBoardFlag) {
		// setupBoardButton.html("Continue Here");
		// $("#setupBoardBtn i").attr("class", "fas fa-chess-knight");
		$("#setupBoardBtn i").attr("class", "fas fa-chess-king");
		$("#setupBoardBtn").attr("data-original-title", "Continue Here");
		// $("#undoMoveBtn").attr("class", "btn btn-default disabled");
		// $("#undoMoveBtn").attr("data-original-title", "(Disabled) Undo Move");
		// $("#newGameBtn").attr("class", "btn btn-default disabled");
		// $("#newGameBtn").attr("data-original-title", "(Disabled) New Game");
		$("#newGameBtn").hide();
		$("#undoMoveBtn").hide();
		$("#clearBoardBtn").show();
		$("#startBoardBtn").show();
		// $("#setupBoardBtn").attr("data-toggle", "");
		// $("#setupBoardBtn").attr("data-toggle", "");
		// $("#setupBoardBtn").attr("title", "NEW_TITLE")
		// 	.tooltip("fixTitle")
		// 	.tooltip("show");
		$("#openingsList").attr("disabled", "");
		$(".selectpicker").selectpicker("refresh");
		$("#myBoard").hide();
		$("#playthroughButtons").hide();
		$("#whosTurn").show();
		setupBoard = Chessboard("myBoard2", {
			draggable: true,
			dropOffBoard: "trash",
			sparePieces: true,
			onChange: setupOnChange
		});
		$(window).resize(setupBoard.resize);

		jQuery("#myBoard2").on("scroll touchmove touchend touchstart contextmenu", function (e) {
			e.preventDefault();
		});

		fen = board.fen();
		setupBoard.position(fen);
		setupBoardFlag = !setupBoardFlag;
	}
	else {
		// setupBoardButton.html("Setup Board");
		if (validateBoard(setupBoard)) {
			$("#setupBoardBtn i").attr("class", "far fa-edit");
			$("#setupBoardBtn").attr("data-original-title", "Edit Board");
			$("#undoMoveBtn").attr("class", "btn btn-default");
			$("#undoMoveBtn").attr("data-original-title", "Undo Move");
			$("#newGameBtn").attr("class", "btn btn-default");
			$("#newGameBtn").attr("data-original-title", "New Game");
			$("#newGameBtn").show();
			$("#undoMoveBtn").show();
			$("#clearBoardBtn").hide();
			$("#startBoardBtn").hide();
			$("#openingsList").removeAttr("disabled");
			$(".selectpicker").selectpicker("refresh");
			$("#myBoard").show();
			$("#playthroughButtons").show();
			$("#whosTurn").hide();
			fen = setupBoard.fen();
			board.position(fen);
			game.reset();
			game = new Chess(fen + " " + whosTurn() + " " + "KQkq - 0 1"); //FIX THE CONCAT ON THIS TO BE RADIO SETTINGS LATER
			updateFen();
			setupBoard.destroy();
			setupBoardFlag = !setupBoardFlag;
		}
	}
});

// if (setupBoard != null)
// {
// 	console.log("CLEAR");
// 	$("#clearBoardBtn").on("click", setupBoard.clear());
// }

//^^^^^Add white or blacks turn radio buttons and stuff***************^^^^^^^
//TODO CHANGE THIS TO A DROPDOWN MAYBE???
function whosTurn() {
	if ($("#whiteTurn").is(":checked")) {
		return "w";
	}
	else if ($("#blackTurn").is(":checked")) {
		return "b";
	}
}

//TODO
//CHECK FOR ILLEGAL POSITIONS BEFORE ALLOWING SETUP BOARD
//SIDE TO MOVE CHECKMATED OPPONENT ALREADY
//SIDE TO MOVE IS IN CHECK
//MORE THAN ONE KING ON THE BOARD FOR A COLOR
//NO KING(S) ON THE BOARD
//1 KING ON THE BOARD
//SIDE TO MOVE IS IN STALEMATE


// TODO
//^^^^^Add clear board and starting position buttons***************^^^^^^^
//ADD goback and submit buttons especially for mobile since screen doesnt scroll easily in setup mode now


// $("#startBtn").on("click", setupBoard.start);
// $("#clearBtn").on("click", setupBoard.clear);
// $("#cancelSetupBtn").on("click", setupBoard.clear);

$("#saveChangesBtn").click(function () {
	var fen = setupBoard.fen();
	board.position(fen);
	$("#setupModal").modal("toggle");

	game.reset();
	game = new Chess(fen + " " + whosTurn() + " " + "KQkq - 0 1"); //FIX THE CONCAT ON THIS TO BE RADIO SETTINGS LATER
	updateFen();

});


//#TODO
//figure out how to make notation outside of the board or make a custom board rim with notation

//#TODO
//add custom board colors and pieces options

//#TODO
//grey/disable out buttons that cant be used, and grey out/disable play button if there if PGN is empty

//#TODO
//add undo button to remedy a draw or mate when you want to go back and play

//#TODO
//add promotion toggle


updateStatus();

//center bottom row vertically
$(document).ready(function () {

	$("#whosTurn").hide();

	function viewSize() {
		return $("#sizer").find("div:visible").data("size");
		// console.log($("#sizer").find("div:visible").data("size"));
	}

	//set Boarders
	function setBoarders() {
		var borderGutter = 10;
		if (viewSize() == "sm" || viewSize() == "xs") {
			// $(".boardSetup").css("width", 800);
			// $("#myBoard").css("height", 800);
			// $("#myBoard").css("width", 800);
			// $(".board-b72b1").css("width", "100%");
			// $(".chessboard-63f37").css("width", "100%");
			// $(window).resize("0");
			// $(window).resize(board.resize);
			// $(window).resizeTo(window.outerWidth, window.outerHeight + 1);
			// $(window).resizeTo(window.outerWidth, window.outerHeight - 1);

			// $(".boardSetup").css("border", 0);
			// $(".boardSetup").css("padding", 0);
			// $(".boardSetup").css("margin", 0);
			// $(".boardSetup").css("margin", 0);
			// $(".boardSetup").removeClass("p-3");
			// $(".boardSetup").addClass("p-0");
			$(".boardSetup").css("right", 0);
			$(".actionButtons").css("right", 0);
			$(".actionButtons").css("top", borderGutter + borderGutter);
			$(".shareGame").css("top", borderGutter * 3);
			$(".movesHistory").css("top", borderGutter);
		}
		else {

			// $(".boardSetup").css("border", "solid rgba(200, 200, 200, .5) 3px");
			// $(".boardSetup").css("cssText", "padding-left: 15px !important;");
			// $(".boardSetup").css("cssText", "padding-right: 15px !important;");
			// $(".boardSetup").css("cssText", "padding: 15px 15px 15px 15px !important;");
			// $(".boardSetup").css("cssText", "padding-right: 15px !important;");
			// $(".boardSetup").css("padding-right", 15);
			// $(".boardSetup").css("padding-top", 15);
			// $(".boardSetup").removeClass("p-0");
			// $(".boardSetup").addClass("p-3");
			$(".movesHistory").css("top", 0);
			$(".boardSetup").css("right", borderGutter);
			$(".actionButtons").css("right", borderGutter);
			$(".actionButtons").css("top", borderGutter);
			$(".shareGame").css("top", borderGutter);
		}
	}

	setBoarders();

	$(window).resize(function () {
		setBoarders();

		const boardContainerHeight = $("#myBoard").height();
		// const playThroughButtonsHeight = $("#playThroughButtons").height();
		const loadButtonsHeight = $("#loadButtons").height();
		$("#movesCard").css("height", boardContainerHeight - loadButtonsHeight);
	});

	//center action buttons vertically
	// $(".actionButtons").css("padding-top", $(".actionButtons").height() / 2 - $("#setupBoardBtn").height());

	//center share section vertically
	// $(".shareGame").css("padding-top", $(".shareGame").height() / 2 - $("#shareGameText").height() - $("#shareGameButtons").height());

	const boardContainerHeight = $("#myBoard").height();
	// const playThroughButtonsHeight = $("#playThroughButtons").height();
	const loadButtonsHeight = $("#loadButtons").height();
	$("#movesCard").css("height", boardContainerHeight - loadButtonsHeight);


	//OPENINGS DROPDOWN
	let openingsDropdown = $("#openingsList");
	openingsDropdown.empty();
	openingsDropdown.append("<option selected=\"true\" disabled>Choose an Opening to Load:</option>");
	openingsDropdown.prop("selectedIndex", 0);

	const url = "json/openings.json";

	// Populate dropdown with list of provinces
	$.getJSON(url, function (data) {
		$.each(data, function (key, entry) {
			openingsDropdown.append($("<option></option>").attr("value", entry.fen).text(entry.name));
		});
		$(".selectpicker").selectpicker("refresh");
	});

	openingsDropdown.change(function () {
		// console.log(openingsDropdown.val());
		game.reset();
		var fen = openingsDropdown.val();
		board.position(fen);
		game = new Chess(fen + " 0 1"); //FIX THE CONCAT ON THIS TO BE RADIO SETTINGS LATER
		updateFen();
	});
	//END OPENINGS DROPDOWN

	//SEARCH OPENINGS DROPDOWN
	// function searchOpeningsDropdown() {
	// 	filter = $("#openingsInput").val().toUpperCase();
	// 	openingsList = $("#openingsList");
	// 	openingsList.children().each(function(){
	// 		let openingsTxt = this.text;
	// 		if(openingsTxt.toUpperCase().indexOf(filter) === -1){
	// 			console.log(this.text);
	// 			this.remove();
	// 		}
	// 	});
	// }

	// $("#searchOpeningsBtn").click(function(){
	// 	searchOpeningsDropdown();
	// });
	//END SEARCH OPENINGS DROPDOWN

	//ruy lopez
	// $("#ruyLopezBtn").on("click", function () {
	// 	game.reset();
	// 	var ruyLopez = "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R"; //use min FEN
	// 	board.position(ruyLopez); //set the board gui to FEN
	// 	game = new Chess(ruyLopez + " b KQkq - 3 3"); //set the chess.js to full FEN with turn
	// 	updateFen();
	// });

	// //italian game
	// $("#italianGameBtn").on("click", function () {
	// 	game.reset();
	// 	var italianGame = "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R"; //use min FEN
	// 	board.position(italianGame); //set the board gui to FEN
	// 	game = new Chess(italianGame + " b KQkq - 3 3"); //set the chess.js to full FEN with turn
	// 	updateFen();
	// });




});