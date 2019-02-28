 let tv;
 let can;
let tChoice;
function setup() {
	//t = new logo(250,200,0);
    can=createCanvas(700,500);
    can.position(100,100);
    can.class("bdd");
 start2();
 tv=new logo(200,200,0);
 tChoice=new logo(200,200,0);
 textSize(20);
 //   rad= createRadio();rad.position(10,10);
 //   rad.class('bdd');
//	rad.option('angle',45);
// rad.option('length',70);
//	rad.option('length',70);
//    rad.changeed();
	}
function draw() {
//frameRate(4);
background(50,150,250);
chgRec();
tv.set1(450,150,0);
duoPoly(tv,multvec[0],multvec[1],multvec[2],multvec[3],multvec[4]);
text("1st length"+multvec[0],30,400)
text("2ch length"+multvec[2],30,420)
text("1st angle"+multvec[1],30,440)
text("2ch angle"+multvec[3],30,460)

	}
function koct(tv,len,level){
	if(level==1){
	tv.fd(len);}
	else{
		koct(tv,len/2,level-1);tv.lt(60);
		koct(tv,len/2,level-1);tv.rt(120);
		koct(tv,len/2,level-1);tv.lt(60);
		koct(tv,len/2,level-1)	
	}
}
function striA(tv,len,level){
	if(level==0){}
else{
	tv.fd(len);striA(tv,len/2,level-1);tv.rt(120);
	tv.fd(len);striA(tv,len/2,level-1);tv.rt(120); 
    tv.fd(len);striA(tv,len/2,level-1);tv.rt(120);
	}
}
