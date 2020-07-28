(this.webpackJsonpchessfen=this.webpackJsonpchessfen||[]).push([[0],{42:function(e,t,a){e.exports=a(73)},47:function(e,t,a){},48:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(13),o=a.n(r),l=(a(47),a(48),a(5)),i=a(6),c=a(12),m=a(9),d=a(8),p=a(3),u=a(11),h=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},n.toggleNav=n.toggleNav.bind(Object(c.a)(n)),n.toggleModal=n.toggleModal.bind(Object(c.a)(n)),n.handleLogin=n.handleLogin.bind(Object(c.a)(n)),n}return Object(i.a)(a,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){alert("Username: ".concat(this.username.value," Password: ").concat(this.password.value," Remember: ").concat(this.remember.checked)),this.toggleModal(),e.preventDefault()}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(p.q,{dark:!0,expand:"md"},s.a.createElement("div",{className:"container"},s.a.createElement(p.r,{className:"mr-auto"},s.a.createElement(u.b,{className:"nav-link",to:"/home"},s.a.createElement("i",{className:"fas fa-chess fa-lg"}),"CHESSFEN")),s.a.createElement(p.s,{onClick:this.toggleNav}),s.a.createElement(p.f,{isOpen:this.state.isNavOpen,navbar:!0},s.a.createElement(p.o,{navbar:!0},s.a.createElement(p.p,null,s.a.createElement(u.b,{className:"nav-link",to:"/home"},"Board")),s.a.createElement(p.p,null,s.a.createElement(u.b,{className:"nav-link",to:"/playcomputer"},"Play Computer")),s.a.createElement(p.p,null,s.a.createElement(u.b,{className:"nav-link",to:"/contact"},"Contact Me"))),s.a.createElement("span",{className:"navbar-text ml-auto"},s.a.createElement(p.a,{outline:!0,onClick:this.toggleModal,id:"loginButton"},s.a.createElement("i",{className:"fa fa-sign-in-alt fa-lg"})," Login"))))),s.a.createElement(p.l,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},s.a.createElement(p.n,{toggle:this.toggleModal},"Login"),s.a.createElement(p.m,null," ",s.a.createElement(p.g,{onSubmit:this.handleLogin},s.a.createElement(p.i,null,s.a.createElement(p.k,{htmlFor:"username"},"Username"),s.a.createElement(p.j,{type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t}})),s.a.createElement(p.i,null,s.a.createElement(p.k,{htmlFor:"password"},"Password"),s.a.createElement(p.j,{type:"password",id:"password",name:"password",innerRef:function(t){return e.password=t}})),s.a.createElement(p.i,{check:!0},s.a.createElement(p.k,{check:!0},s.a.createElement(p.j,{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}}),"Remember me")),s.a.createElement(p.a,{type:"submit",value:"submit",color:"primary"},"Login")))))}}]),a}(n.Component),f=a(10),b=a(14),v=a(21),g=a.n(v),E=a(17),N=a.n(E),y=a(26),k=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).searchOpening=function(){var e=Object(y.a)(N.a.mark((function e(t){var a,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t,null==t&&(a="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"),e.next=4,fetch("".concat("https://explorer.lichess.ovh/master?fen=").concat(a));case 4:return n=e.sent,e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.displayOpeningsInfo=function(){var e=Object(y.a)(N.a.mark((function e(t){var a,s,r,o,l,i,c,m,d;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.searchOpening(t);case 2:for(a=e.sent,s="",r=[],null!=a.opening?s=a.opening.eco+" "+a.opening.name:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"===n.props.fen&&(s=""),n.setState({openingName:s}),o=0;o<a.moves.length;++o)l=a.moves[o].white+a.moves[o].black+a.moves[o].draws,i=Math.ceil(a.moves[o].white/l*100),c=Math.ceil(a.moves[o].black/l*100),m=Math.ceil(a.moves[o].draws/l*100),d='\n                <div class="row">\n                    <div class="col-1 p-0">\n                        '.concat(a.moves[o].san,'\n                    </div>\n                    <div class="col-2 p-0">\n                        ').concat(l.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),'\n                    </div>\n                    <div class="col-2 p-0">\n                        ').concat(a.moves[o].averageRating,'\n                    </div>\n                    <div class="progress col-7 p-0">\n                        <div class="progress-bar bg-light" role="progressbar" style="width:').concat(i,'%; color:black" aria-valuenow="').concat(i,'" aria-valuemin="0"\n                            aria-valuemax="100">').concat(i,'%\n                        </div>\n                        <div class="progress-bar bg-secondary" role="progressbar" style="width:').concat(m,'%" aria-valuenow="').concat(m,'"\n                            aria-valuemin="0" aria-valuemax="100">').concat(m,'%\n                        </div>\n                        <div class="progress-bar bg-dark" role="progressbar" style="width:').concat(c,'%" aria-valuenow="{blackPerc}" aria-valuemin="0"\n                            aria-valuemax="100">').concat(c,"% \n                        </div>\n                    </div>\n                    \n                </div>\n        "),r.push(d);n.setState({movesList:[]}),n.setState({movesList:[].concat(Object(f.a)(n.state.movesList),r)});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={movesList:[],openingName:""},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.displayOpeningsInfo()}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.fen!==this.props.fen&&this.displayOpeningsInfo(e.fen)}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{class:"row ml-0 p-0"},s.a.createElement("h5",null,this.state.openingName)),s.a.createElement("div",{className:"row mb-3 ml-0 p-0",id:"openingsInfoHeader"},s.a.createElement("div",{className:"col-1 p-0 m-0"},"Move"),s.a.createElement("div",{className:"col-2 p-0 m-0"},"Total Games"),s.a.createElement("div",{className:"col-2 p-0 m-0"},"Avg Rating"),s.a.createElement("div",{className:"col-7 text-center"},"White/Draw/Black")),s.a.createElement("div",{className:"row ml-0 pl-0"},this.state.movesList.map((function(e,t){return s.a.createElement("div",{className:"col-12",key:t,dangerouslySetInnerHTML:{__html:e}})}))))}}]),a}(n.Component),P=a(41),w=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement(p.b,null,s.a.createElement(p.c,null,s.a.createElement(p.d,null,"Move History"),s.a.createElement("ol",null,this.props.history.map((function(e,t){return s.a.createElement("li",{key:t,dangerouslySetInnerHTML:{__html:e}})})))))}}]),a}(n.Component),B=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).undoMove=function(){n.game.undo();var e=0,t=["rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"];n.state.fensIndex>0&&(e=n.state.fensIndex-1,(t=Object(f.a)(n.state.fensArray)).pop()),n.setState({fen:n.game.fen(),position:n.game.fen(),history:n.game.history({verbose:!1}),fensArray:Object(f.a)(t),fensIndex:e})},n.flipBoard=function(){"white"===n.state.orientation?n.setState({orientation:"black"}):n.setState({orientation:"white"})},n.newGame=function(){n.game=new b;var e=[];e.push("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"),n.setState({fen:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",position:n.game.fen(),history:[],dropSquareStyle:{},squareStyles:{},pieceSquare:"",square:"",fensArray:[].concat(e),fensIndex:0})},n.editBoard=function(){var e=!n.state.sparePieces;n.setState({sparePieces:e})},n.moveEnd=function(){var e=n.state.fensArray.length-1;n.setState({fensIndex:e,position:n.state.fensArray[e]})},n.moveForward=function(){if(n.state.fensIndex<n.state.fensArray.length-1){var e=n.state.fensIndex+1;n.setState({fensIndex:e,position:n.state.fensArray[e]})}},n.moveBackward=function(){if(n.state.fensIndex>0){var e=n.state.fensIndex-1;n.setState({fensIndex:e,position:n.state.fensArray[e]})}},n.moveBeginning=function(){n.setState({fensIndex:0,position:n.state.fensArray[0]})},n.onDrop=function(e){var t=e.sourceSquare,a=e.targetSquare;null!==n.game.move({from:t,to:a,promotion:"q"})&&n.setState((function(){return{fen:n.game.fen(),history:n.game.history({verbose:!1}),position:n.game.fen(),fensArray:[].concat(Object(f.a)(n.state.fensArray),[n.game.fen()]),fensIndex:n.state.fensArray.length}}))},n.state={position:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",orientation:"white",fen:"start",dropSquareStyle:{},squareStyles:{},pieceSquare:"",square:"",history:[],undo:!0,sparePieces:!1,fensArray:[],fensIndex:0},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.game=new b,this.setState((function(){return{fensArray:[].concat(Object(f.a)(e.state.fensArray),["rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"])}}))}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-8"},s.a.createElement(g.a,{position:this.state.position,orientation:this.state.orientation,onSquareRightClick:this.onSquareRightClick,onDrop:this.onDrop,undo:this.state.undo,sparePieces:this.state.sparePieces,lightSquareStyle:{backgroundColor:"#FFFFDD"},darkSquareStyle:{backgroundColor:"#86A666"},transitionDuration:150,width:650})),s.a.createElement("div",{className:"col-4"},s.a.createElement(w,{history:this.state.history}))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-7"},s.a.createElement("div",{id:"playthroughButtons",className:"text-center"},s.a.createElement("span",{type:"button",className:"btn btn-default",id:"startPositionBtn",onClick:this.moveBeginning},s.a.createElement("i",{className:"fas fa-fast-backward"})),s.a.createElement("span",{type:"button",className:"btn btn-default",id:"prevBtn",onClick:this.moveBackward},s.a.createElement("i",{className:"fas fa-backward"})),s.a.createElement("span",{type:"button",className:"btn btn-default",id:"nextBtn",onClick:this.moveForward},s.a.createElement("i",{className:"fas fa-forward"})),s.a.createElement("span",{type:"button",className:"btn btn-default",id:"endPositionBtn",onClick:this.moveEnd},s.a.createElement("i",{className:"fas fa-fast-forward"}))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-7"},s.a.createElement("div",{id:"actionButtons",className:"text-center"},s.a.createElement("span",{type:"button",className:"btn btn-default",id:"clearBoardBtn","data-toggle":"tooltip","data-placement":"top",title:"Clear Board",style:{display:"none"}},s.a.createElement("i",{className:"fas fa-trash-alt"})),s.a.createElement("span",{type:"button",className:"btn btn-default",id:"startBoardBtn","data-toggle":"tooltip","data-placement":"top",title:"Start Board",style:{display:"none"}},s.a.createElement("i",{className:"fas fa-chess-board"})),s.a.createElement("span",{type:"button",className:"btn btn-default",id:"undoMoveBtn","data-toggle":"tooltip","data-placement":"top",title:"Undo Move",onClick:this.undoMove},s.a.createElement("i",{className:"fas fa-undo-alt"})),s.a.createElement("span",{type:"button",className:"btn btn-default",id:"newGameBtn","data-toggle":"tooltip","data-placement":"top",title:"New Game",onClick:this.newGame},s.a.createElement("i",{className:"fas fa-chess-board"})),s.a.createElement("span",{type:"button",className:"btn btn-default",id:"flipBoardBtn","data-toggle":"tooltip","data-placement":"top",title:"Flip Board",onClick:this.flipBoard},s.a.createElement("i",{className:"fas fa-arrows-alt-v"})),s.a.createElement("span",{type:"button",className:"btn btn-default",id:"setupBoardBtn","data-toggle":"tooltip","data-placement":"top",title:"Edit Board",onClick:this.editBoard},s.a.createElement("i",{className:"far fa-edit"}))))),s.a.createElement(P.Fade,{in:!0},s.a.createElement("div",{className:"row mt-5"},s.a.createElement("div",{className:"col-8"},s.a.createElement(k,{fen:this.state.fen}))))))}}]),a}(n.Component),S=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={boardWidth:600},n.updateDimensions=n.updateDimensions.bind(Object(c.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateDimensions)}},{key:"updateDimensions",value:function(){this.setState({boardWidth:window.innerWidth/2}),console.log(this.state.boardWidth)}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement(B,{boardWidth:this.state.boardWidth}))))}}]),a}(n.Component),O=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).undoMove=function(){n.game.undo();var e=0,t=["rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"];n.state.fensIndex>0&&(e=n.state.fensIndex-1,(t=Object(f.a)(n.state.fensArray)).pop()),n.setState({fen:n.game.fen(),position:n.game.fen(),history:n.game.history({verbose:!1}),fensArray:Object(f.a)(t),fensIndex:e})},n.flipBoard=function(){"white"===n.state.orientation?n.setState({orientation:"black"}):n.setState({orientation:"white"})},n.newGame=function(){n.game=new b;var e=[];e.push("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"),n.setState({fen:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",position:n.game.fen(),history:[],dropSquareStyle:{},squareStyles:{},pieceSquare:"",square:"",fensArray:[].concat(e),fensIndex:0})},n.editBoard=function(){var e=!n.state.sparePieces;n.setState({sparePieces:e})},n.moveEnd=function(){var e=n.state.fensArray.length-1;n.setState({fensIndex:e,position:n.state.fensArray[e]})},n.moveForward=function(){if(n.state.fensIndex<n.state.fensArray.length-1){var e=n.state.fensIndex+1;n.setState({fensIndex:e,position:n.state.fensArray[e]})}},n.moveBackward=function(){if(n.state.fensIndex>0){var e=n.state.fensIndex-1;n.setState({fensIndex:e,position:n.state.fensArray[e]})}},n.moveBeginning=function(){n.setState({fensIndex:0,position:n.state.fensArray[0]})},n.onDrop=function(e){var t=e.sourceSquare,a=e.targetSquare;null!==n.game.move({from:t,to:a,promotion:"q"})&&n.setState((function(){return{fen:n.game.fen(),history:n.game.history({verbose:!1}),position:n.game.fen(),fensArray:[].concat(Object(f.a)(n.state.fensArray),[n.game.fen()]),fensIndex:n.state.fensArray.length}}))},n.state={position:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",orientation:"white",fen:"start",dropSquareStyle:{},squareStyles:{},pieceSquare:"",square:"",history:[],undo:!0,sparePieces:!1,fensArray:[],fensIndex:0},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.game=new b,this.setState((function(){return{fensArray:[].concat(Object(f.a)(e.state.fensArray),["rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"])}}))}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement(g.a,{position:this.state.position,orientation:this.state.orientation,onSquareRightClick:this.onSquareRightClick,onDrop:this.onDrop,undo:this.state.undo,sparePieces:this.state.sparePieces,lightSquareStyle:{backgroundColor:"#FFFFDD"},darkSquareStyle:{backgroundColor:"#86A666"},transitionDuration:150}))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-6"},s.a.createElement("div",{id:"playthroughButtons",className:"text-center"},s.a.createElement("span",{type:"button",className:"btn btn-default",id:"startPositionBtn",onClick:this.moveBeginning},s.a.createElement("i",{className:"fas fa-fast-backward"})),s.a.createElement("span",{type:"button",className:"btn btn-default",id:"prevBtn",onClick:this.moveBackward},s.a.createElement("i",{className:"fas fa-backward"})),s.a.createElement("span",{type:"button",className:"btn btn-default",id:"nextBtn",onClick:this.moveForward},s.a.createElement("i",{className:"fas fa-forward"})),s.a.createElement("span",{type:"button",className:"btn btn-default",id:"endPositionBtn",onClick:this.moveEnd},s.a.createElement("i",{className:"fas fa-fast-forward"}))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-6"},s.a.createElement("div",{id:"actionButtons",className:"text-center"},s.a.createElement("span",{type:"button",className:"btn btn-default",id:"clearBoardBtn","data-toggle":"tooltip","data-placement":"top",title:"Clear Board",style:{display:"none"}},s.a.createElement("i",{className:"fas fa-trash-alt"})),s.a.createElement("span",{type:"button",className:"btn btn-default",id:"startBoardBtn","data-toggle":"tooltip","data-placement":"top",title:"Start Board",style:{display:"none"}},s.a.createElement("i",{className:"fas fa-chess-board"})),s.a.createElement("span",{type:"button",className:"btn btn-default",id:"undoMoveBtn","data-toggle":"tooltip","data-placement":"top",title:"Undo Move",onClick:this.undoMove},s.a.createElement("i",{className:"fas fa-undo-alt"})),s.a.createElement("span",{type:"button",className:"btn btn-default",id:"newGameBtn","data-toggle":"tooltip","data-placement":"top",title:"New Game",onClick:this.newGame},s.a.createElement("i",{className:"fas fa-chess-board"})),s.a.createElement("span",{type:"button",className:"btn btn-default",id:"flipBoardBtn","data-toggle":"tooltip","data-placement":"top",title:"Flip Board",onClick:this.flipBoard},s.a.createElement("i",{className:"fas fa-arrows-alt-v"})),s.a.createElement("span",{type:"button",className:"btn btn-default",id:"setupBoardBtn","data-toggle":"tooltip","data-placement":"top",title:"Edit Board",onClick:this.editBoard},s.a.createElement("i",{className:"far fa-edit"})))))))}}]),a}(n.Component),j=a(16),x=a(27),C=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleBlur=function(e){return function(){n.setState({touched:Object(x.a)(Object(x.a)({},n.state.touched),{},Object(j.a)({},e,!0))})}},n.state={firstName:"",lastName:"",phoneNum:"",email:"",agree:!1,contactType:"By Phone",feedback:"",touched:{firstName:!1,lastName:!1,phoneNum:!1,email:!1}},n.handleInputChange=n.handleInputChange.bind(Object(c.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(c.a)(n)),n}return Object(i.a)(a,[{key:"validate",value:function(e,t,a,n){var s={firstName:"",lastName:"",phoneNum:"",email:""};this.state.touched.firstName&&(e.length<2?s.firstName="First name must be at least 2 characters.":e.length>15&&(s.firstName="First name must be 15 or less characters.")),this.state.touched.lastName&&(t.length<2?s.lastName="Last name must be at least 2 characters.":t.length>15&&(s.lastName="Last name must be 15 or less characters."));return this.state.touched.phoneNum&&!/^\d+$/.test(a)&&(s.phoneNum="The phone number should contain only numbers."),this.state.touched.email&&!n.includes("@")&&(s.email="Email should contain a @"),s}},{key:"handleInputChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(Object(j.a)({},n,a))}},{key:"handleSubmit",value:function(e){console.log("Current state is: "+JSON.stringify(this.state)),alert("Current state is: "+JSON.stringify(this.state)),e.preventDefault()}},{key:"render",value:function(){var e=this.validate(this.state.firstName,this.state.lastName,this.state.phoneNum,this.state.email);return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row row-content"},s.a.createElement("div",{className:"col-12"},s.a.createElement("h2",null,"Send us your Feedback"),s.a.createElement("hr",null)),s.a.createElement("div",{className:"col-md-10"},s.a.createElement(p.g,{onSubmit:this.handleSubmit},s.a.createElement(p.i,{row:!0},s.a.createElement(p.k,{htmlFor:"firstName",md:2},"First Name"),s.a.createElement(p.e,{md:10},s.a.createElement(p.j,{type:"text",id:"firstName",name:"firstName",placeholder:"First Name",value:this.state.firstName,invalid:e.firstName,onBlur:this.handleBlur("firstName"),onChange:this.handleInputChange}),s.a.createElement(p.h,null,e.firstName))),s.a.createElement(p.i,{row:!0},s.a.createElement(p.k,{htmlFor:"lastName",md:2},"Last Name"),s.a.createElement(p.e,{md:10},s.a.createElement(p.j,{type:"text",id:"lastName",name:"lastName",placeholder:"Last Name",value:this.state.lastName,invalid:e.lastName,onBlur:this.handleBlur("lastName"),onChange:this.handleInputChange}),s.a.createElement(p.h,null,e.lastName))),s.a.createElement(p.i,{row:!0},s.a.createElement(p.k,{htmlFor:"phoneNum",md:2},"Phone"),s.a.createElement(p.e,{md:10},s.a.createElement(p.j,{type:"tel",id:"phoneNum",name:"phoneNum",placeholder:"Phone number",value:this.state.phoneNum,invalid:e.phoneNum,onBlur:this.handleBlur("phoneNum"),onChange:this.handleInputChange}),s.a.createElement(p.h,null,e.phoneNum))),s.a.createElement(p.i,{row:!0},s.a.createElement(p.k,{htmlFor:"email",md:2},"Email"),s.a.createElement(p.e,{md:10},s.a.createElement(p.j,{type:"email",id:"email",name:"email",placeholder:"Email",value:this.state.email,invalid:e.email,onBlur:this.handleBlur("email"),onChange:this.handleInputChange}),s.a.createElement(p.h,null,e.email))),s.a.createElement(p.i,{row:!0},s.a.createElement(p.e,{md:{size:4,offset:2}},s.a.createElement(p.i,{check:!0},s.a.createElement(p.k,{check:!0},s.a.createElement(p.j,{type:"checkbox",name:"agree",checked:this.state.agree,onChange:this.handleInputChange})," ",s.a.createElement("strong",null,"May we contact you?")))),s.a.createElement(p.e,{md:4},s.a.createElement(p.j,{type:"select",name:"contactType",value:this.state.contactType,onChange:this.handleInputChange},s.a.createElement("option",null,"By Phone"),s.a.createElement("option",null,"By Email")))),s.a.createElement(p.i,{row:!0},s.a.createElement(p.k,{htmlFor:"feedback",md:2},"Your Feedback"),s.a.createElement(p.e,{md:10},s.a.createElement(p.j,{type:"textarea",id:"feedback",name:"feedback",rows:"12",value:this.state.feedback,onChange:this.handleInputChange}))),s.a.createElement(p.i,{row:!0},s.a.createElement(p.e,{md:{size:10,offset:2}},s.a.createElement(p.a,{type:"submit",color:"primary"},"Send Feedback"))))))))}}]),a}(n.Component);var q=function(){return s.a.createElement(u.a,null,s.a.createElement(s.a.Fragment,null,s.a.createElement(h,null),s.a.createElement(u.e,null,s.a.createElement(u.d,{exact:!0,path:"/home",component:S}),s.a.createElement(u.d,{exact:!0,path:"/playcomputer",component:O}),s.a.createElement(u.d,{exact:!0,path:"/contact",component:C}),s.a.createElement(u.c,{to:"/home"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(70),a(71),a(72);o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.7ee24b26.chunk.js.map