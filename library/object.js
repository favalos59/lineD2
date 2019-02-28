class object{
	constructor(x,y,xsp,ysp){
		this.pos=createVector(x,y);
		this.vel=createVector(xsp,ysp);
		this.acc=createVector(0,.1);
	}
	
	move(){
		this.vel.add(this.acc);
		this.pos.add(this.vel);
	}
	
	chbd(){
	if(this.pos.x<0||this.pos.x>col){
	this.vel.x=-1*this.vel.x;}
	if(this.pos.y<0||this.pos.y>row){
	this.vel.y=-1*this.vel.y;}
	}
	
	display(){
		fill(0,200,200);
		strokeWeight(3);
		stroke(200,200,0);
		ellipse(this.pos.x,this.pos.y,10,5);
	}