let row,col;
let cur=[];
let list=[];

function start(ar){
for(let i=0;1<col;i++){
	ar[i]=[];
	for(let j=0;j<row;j++){
	ar[i][j]=0;
	}}
ar[col/2][0]=1;
		
		}
let tran=[];
		function refig(ar){
	for(let j=1;j<row-1;j++){
for(let i=1;i<col-1;i++){
	ar[i][j]=rule(ar[i-1][j-1,ar[i][j-1],ar[i+1][j-1]);
	}}
}
}
}

		function paint(ar){
		start(ar);refig(ar);noStroke();
		for(let j=0;j<row;j++){
		for(let i=0;i<col;i++){
	if(ar[i][j]==0){fill(250,0,0);rect(i,j,1,1);}
	else if(ar[i][j]==1){fill(0,250,0);rect(i,j,1,1);}
	}}
	}
	
		function rule(x,y,z){
		 if(x==1&&y==1&&z==1){return list[0];}
	else if(x==1&&y==1&&z==0){return list[1];}
	else if(x==1&&y==0&&z==1){return list[2];}
	else if(x==0&&y==0&&z==0){return list[3];}
	else if(x==0&&y==1&&z==1){return list[4];}
	else if(x==0&&y==1&&z==0){return list[5];}
	else if(x==0&&y==0&&z==1){return list[6];}
	else if(x==0&&y==0&&z==0){return list[7];}
	}

