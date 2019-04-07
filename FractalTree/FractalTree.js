var angle = 0;
var startingAngle = 3.14159/4;
var offset = 20;
var branchThickness = 6;
var thickRed = .05;
var mouseClick = false;
//var branchReduction = .70;

function setup() {
	createCanvas(1200, 800);
	textSize(14);

	branchSizeSlider = createSlider(0, .70, 0, .01);
	branchSizeSlider.position(width - branchSizeSlider.width - offset , offset*2);

	angleSlider = createSlider(0, PI/2, startingAngle, 0.01);
	angleSlider.position(width - angleSlider.width - offset, offset*6);

	treeSizeSlider = createSlider(1, height/4, height/5, 1);
	treeSizeSlider.position(width - angleSlider.width - offset, offset*10);

	treeGirthSlider = createSlider(.01, .3, .1, .01);
	treeGirthSlider.position(width - angleSlider.width - offset, offset*14);


}

function draw() {
	background(51);

	drawWords("Grow Branches", offset, 0);
	drawWords("Rotate Branches", offset, offset * 4);
	drawWords("Size of Tree", offset, offset * 8);
	drawWords("Girth of Tree", offset, offset * 12);

	angle = angleSlider.value();
	branchSize = branchSizeSlider.value();
	treeSize = treeSizeSlider.value();
	treeGirth = treeGirthSlider.value();
	stroke(255);
	translate(width/2, height);

	strokeWeight(treeSize*treeGirth * 1.5);
	//strokeJoin(MITER);
	//strokeCap(SQUARE);
	branch(treeSize);
}

function drawWords(word, x, y){
	fill(255);
	strokeWeight(.3);
	//text(word, width + x, height + y);
	text(word, width - angleSlider.width - offset, angleSlider.height + y);
}

function branch(len){
	line(0, 0, 0, -len);

	//ADD LEAVES TO TREE (WARNING PROCESSOR EXTENSIVE)
	// if(len <=4 && mouseClick){
	// 	push();
	// 	leaf(len);
	// 	pop();
	// }


	//branchThickness = branchThickness - .5;
	//strokeWeight(branchThickness);
	//console.log(branchSize);
	//strokeCap(SQUARE);
	//strokeJoin(MITER);
	strokeCap(ROUND);
	translate(0, -len);
	if(len > 4){
		push();
		rotate(angle);
		strokeWeight(len*treeGirth);
		branch(len * branchSize);
		pop();

		push();
		rotate(-angle);
		strokeWeight(len*treeGirth);
		branch(len * branchSize);
		pop();

		if(mouseClick){
			push();
			strokeWeight(len*treeGirth);
			branch(len * branchSize);
			pop();
		}
	}
}

function leaf(len){

	var size = len*1.5;
	fill(204, 101, 192, 27);
  	//stroke(127, 63, 120);
  	//ellipse(0, 0, size, size);
  	noStroke();
  	for (var i = 0; i < 10; i ++) {
    	ellipse(0, 0, size, size);
    	rotate(PI/5);
  	}

}

function mouseClicked(){
	mouseClick = !mouseClick;
}