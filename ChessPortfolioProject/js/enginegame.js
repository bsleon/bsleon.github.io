/* eslint-disable linebreak-style */
function engineGame(e) {
	e = e || {};
	var t, o, n = new Chess,
		i = "node_modules/stockfish/src/stockfish.js",
		a = "function" == typeof STOCKFISH ? STOCKFISH() : new Worker(e.stockfishjs || i),
		r = "function" == typeof STOCKFISH ? STOCKFISH() : new Worker(e.stockfishjs || i),
		s = {},
		c = !1,
		l = {
			wtime: 3e5,
			btime: 3e5,
			winc: 2e3,
			binc: 2e3
		},
		m = "white",
		u = null,
		p = !1;
	// f = document.getElementById("evaluation");

	function h(e, t) {
		console.log("UCI: " + e), (t || a).postMessage(e);
	}

	function d() {
		var e = "Engine: ";
		s.engineLoaded ? s.engineReady ? e += "ready." : e += "loaded..." : e += "loading...", s.search && (e += "<br>" + s.search, s.score && c && (e += ("Mate" === s.score.substr(0, 4) ? " " : " Score: ") + s.score)), $("#engineStatus").html(e);
	}

	function v(e, t) {
		var o = !1;
		l.startTime > 0 && e == l.clockColor && (t = Math.max(0, t + l.startTime - Date.now()), o = !0);
		var n = e == m ? "#time2" : "#time1",
			i = Math.ceil(t / 1e3),
			a = Math.floor(i / 60);
		i -= 60 * a;
		var r = Math.floor(a / 60),
			s = r + ":" + ("0" + (a -= 60 * r)).slice(-2) + ":" + ("0" + i).slice(-2);
		o && (s += 1 & i ? " <--" : " <-"), $(n).text(s);
	}

	function w() {
		v("white", l.wtime), v("black", l.btime);
	}

	function b() {
		w();
		var e = ("white" == l.clockColor ? l.wtime : l.btime) + l.startTime - Date.now();
		u = setTimeout(b, e % 1e3 + 1);
	}

	function g() {
		for (var e = "", t = n.history({
				verbose: !0
			}), o = 0; o < t.length; ++o) {
			var i = t[o];
			e += " " + i.from + i.to + (i.promotion ? i.promotion : "");
		}
		return e;
	}

	function k() {
		! function () {
			if (null !== u && (clearTimeout(u), u = null), l.startTime > 0) {
				var e = Date.now() - l.startTime;
				l.startTime = null, "white" == l.clockColor ? l.wtime = Math.max(0, l.wtime - e) : l.btime = Math.max(0, l.btime - e);
			}
		}(), $("#pgn").text(n.pgn()), t.position(n.fen()), w();
		var e = "w" == n.turn() ? "white" : "black";
		// n.game_over() || (e != m && (h("position startpos moves" + g()), h("position startpos moves" + g(), r), f.textContent = "", h("eval", r), l && l.wtime ? h("go " + (l.depth ? "depth " + l.depth : "") + " wtime " + l.wtime + " winc " + l.winc + " btime " + l.btime + " binc " + l.binc) : h("go " + (l.depth ? "depth " + l.depth : "")), p = !0), n.history().length >= 2 && !l.depth && !l.nodes && ("w" == n.turn() ? (l.wtime += l.winc, l.clockColor = "white") : (l.btime += l.binc, l.clockColor = "black"), l.startTime = Date.now(), b()));
		n.game_over() || (e != m && (h("position startpos moves" + g()), h("position startpos moves" + g(), r), h("eval", r), l && l.wtime ? h("go " + (l.depth ? "depth " + l.depth : "") + " wtime " + l.wtime + " winc " + l.winc + " btime " + l.btime + " binc " + l.binc) : h("go " + (l.depth ? "depth " + l.depth : "")), p = !0), n.history().length >= 2 && !l.depth && !l.nodes && ("w" == n.turn() ? (l.wtime += l.winc, l.clockColor = "white") : (l.btime += l.binc, l.clockColor = "black"), l.startTime = Date.now(), b()));
	}
	setInterval(function () {
		o || n.game_over() && (o = !0, alert("Game Over"));
	}, 1e3), h("uci"), r.onmessage = function (e) {
		var t;
		t = e && "object" == typeof e ? e.data : e, console.log("evaler: " + t), "uciok" !== t && "readyok" !== t && "option name" !== t.substr(0, 11);
		//  && (f.textContent && (f.textContent += "\n"), f.textContent += t);
	}, a.onmessage = function (e) {
		var t;
		if (t = e && "object" == typeof e ? e.data : e, console.log("Reply: " + t), "uciok" == t) s.engineLoaded = !0;
		else if ("readyok" == t) s.engineReady = !0;
		else {
			var o = t.match(/^bestmove ([a-h][1-8])([a-h][1-8])([qrbk])?/);
			if (o ? (p = !1, n.move({
				from: o[1],
				to: o[2],
				promotion: o[3]
				// }), k(), h("eval", r), f.textContent = "") : (o = t.match(/^info .*\bdepth (\d+) .*\bnps (\d+)/)) && (s.search = "Depth: " + o[1] + " Nps: " + o[2]), o = t.match(/^info .*\bscore (\w+) (-?\d+)/)) {
			}), k(), h("eval", r)) : (o = t.match(/^info .*\bdepth (\d+) .*\bnps (\d+)/)) && (s.search = "Depth: " + o[1] + " Nps: " + o[2]), o = t.match(/^info .*\bscore (\w+) (-?\d+)/)) {
				var i = parseInt(o[2]) * ("w" == n.turn() ? 1 : -1);
				"cp" == o[1] ? s.score = (i / 100).toFixed(2) : "mate" == o[1] && (s.score = "Mate in " + Math.abs(i)), (o = t.match(/\b(upper|lower)bound\b/)) && (s.score = ("upper" == o[1] == ("w" == n.turn()) ? "<= " : ">= ") + s.score);
			}
		}
		d();
	};
	var C = {
		showErrors: !0,
		draggable: !0,
		position: "start",
		onDragStart: function (e, t, o, i) {
			var a = "white" == m ? /^b/ : /^w/;
			if (n.game_over() || -1 !== t.search(a)) return !1;
		},
		onDrop: function (e, t) {
			if (null === n.move({
				from: e,
				to: t,
				promotion: document.getElementById("promote").value
			})) return "snapback";
			k();
		},
		onSnapEnd: function () {
			t.position(n.fen());
		}
	};
	return t = new ChessBoard("myBoard", C), {
		reset: function () {
			n.reset(), h("setoption name Contempt value 0"), this.setSkillLevel(0), h("setoption name King Safety value 0");
		},
		loadPgn: function (e) {
			n.load_pgn(e);
		},
		setPlayerColor: function (e) {
			m = e, t.orientation(m);
		},
		setSkillLevel: function (e) {
			var t;
			e < 0 && (e = 0), e > 20 && (e = 20), l.level = e, l.depth = e < 5 ? "1" : e < 10 ? "2" : e < 15 ? "3" : "", h("setoption name Skill Level value " + e), t = Math.round(6.35 * e + 1), h("setoption name Skill Level Maximum Error value " + Math.round(-.5 * e + 10)), h("setoption name Skill Level Probability value " + t);
		},
		setTime: function (e, t) {
			l = {
				wtime: 1e3 * e,
				btime: 1e3 * e,
				winc: 1e3 * t,
				binc: 1e3 * t
			};
		},
		setDepth: function (e) {
			l = {
				depth: e
			};
		},
		setNodes: function (e) {
			l = {
				nodes: e
			};
		},
		setContempt: function (e) {
			h("setoption name Contempt value " + e);
		},
		setAggressiveness: function (e) {
			h("setoption name Aggressiveness value " + e);
		},
		setDisplayScore: function (e) {
			c = e, d();
		},
		start: function () {
			h("ucinewgame"), h("isready"), s.engineReady = !1, s.search = null, d(), k(), o = !1;
		},
		undo: function () {
			return !p && (n.undo(), n.undo(), s.search = null, d(), k(), !0);
		}
	};
}