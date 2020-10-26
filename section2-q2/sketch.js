// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
  if((i+j) % 2 == 0){
    fill(225);
    }
 else{
        fill(0);
      }
  rect(size*1,size*2,size,size);
    }
  }
}
