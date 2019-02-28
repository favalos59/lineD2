let inp1;let multvec =[]; 
let par0,sl0;let par1,sl1;
let par2,s2;let par3,sl3;
function start2(){
	multvec[20,30,40,50,100];
	inp1= createInput("len1,dir1,len2,dir2,amt");
	inp1.class('bbd');
	inp1.position(800,50);
	inp1.changed(chglev1)
	
	par0=createP("1 length");par0.position(800,90);
par0.class('bbd');
par0.id('p0');sl0=createSlider(0,150,50,1);
sl0.parent('p0');sl0.mousePressed(chgmult0);
	
	par1=createP("1 angle");par1.position(800,190);
par1.class('bbd');
par1.id('p1');sl1=createSlider(0,180,50,2);
sl1.parent('p1');sl1.mousePressed(chgmult1);

	par2=createP("2 length");par2.position(800,290);
par2.class('bbd');
par2.id('p2');sl2=createSlider(0,180,50,2);
sl2.parent('p2');sl2.mousePressed(chgmult2);

	par3=createP("2 angle");par3.position(800,390);
par3.class('bbd');
par3.id('p3');sl3=createSlider(0,180,50,2);
sl3.parent('p3');sl3.mousePressed(chgmult3);

rad2=createRadio("choice a Rec.shape");rad2.class('radbdd');
rad2.position(1000,110);
rad2.option('sier',1);
rad2.option('koct',2);
rad2.option('clear',3);
rad2.option('bkgrd',4);
rad2.option('no bkgrd',5);
rad2.mousePressed(chgRec);
}
function chglev1(){
	let mult=inp1.value();
	multvec=mult.split(',').map(n=>floor(n));
}
	function chgmult0(){
		multvec[0]=sl0.value();
	}
	function chgmult1(){
		multvec[1]=sl1.value();
	}
	function chgmult2(){
		multvec[2]=sl2.value();
	}
	function chgmult3(){
		multvec[3]=sl3.value();
	}
	function chgRec(){
		let choice=rad2.value();
		if(choice){
			switch(choice){
				case'1': tChoice.set1(200,300,-60);
				StriA(tChoice,150,5);break;
				case'2': tChoice.set1(10,450,0);
				koch(tChoice,100,6);break;
				case'3':break;
				case'4':background(200,200,100);break;
				case'5':clear();break;
			
			
			}
			
		}
		
	}
	
	function chgRec(){
let choice=rad2.value();
if(choice){
switch(choice){
	case'1':tChoice.set1(200,300,-60);
	striA(tChoice,150,5);break;
	case'2':tChoice.set1(10,450,0);
	koct(tChoice,100,6);break;
	case'3':break;
	case'4':background(200,200,100);break;
	case'5':clear();break;
}	
}
	}
	
	
	function duoPoly(tv,len1,dir1,len2,dir2,total){
		let atm=1;
		do{
		tv.vec(atm*dir1,len1);
		tv.vec(atm*dir2,len2);
		atm+=1;
		}while(atm<total);
		
	}
	