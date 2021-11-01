let x, z; // ポイント1：関数の外で変数を宣言する

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  z = height / 2;
}

function draw(){
  background(160, 192, 255); // ポイント2: draw の最初に background を書く
  ellipse(300, 300, z);
  z += 2;
  while(z > 100){
  z -= 70;
}
 if(keyIsDown(LEFT_ARROW)){ z += 2;
 while(z > 100){
 z -= 50; }
}
}
