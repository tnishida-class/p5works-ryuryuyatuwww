// テキスト「繰り返し」
function setup() {
  noFill();
  for(let i = 0; i<10; i++){
      let r = (i + 1)*10
      ellipse(50, 50, r);
    if(i < 4){
       stroke(0,0,225)
    }
   else{
    stroke(225,0,0)}
  }
  }

// for 文を使うと、同じプログラムを以下のように書くことができます
// function setup() {
//   createCanvas(100,100);
//   fill(0);
//   for(let i = 0; i < 5; i++){
//     rect(i * 20, i * 20, 20, 20);
//   }
// }
