// チェッカー
function setup() {
  createCanvas(200, 200);
  createCanvas(200,200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
  if((i+j) % 2 == 0){
    fill(225);
    }
 else{
        fill(128);
 }
  rect(i*10,j*10,10,10);
    }
  for(let i=0;i<8;i++){
    for(let j =0;j<3;j++){
      if((i+j)%2==1){
        fill(255,0,0);
        ellipse(i*10+5,j*10+5,10,10)
 for(let i=0;i<8;i++){
   for(let j=0;6<j<8;j++){
     if((i+j)%2==1){
       fill(255);
       ellipse(i*10-5,j*10-5,10,10)
     }
   }
 }
      }
    }
  }
  }
}
