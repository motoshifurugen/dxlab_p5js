function setup() {
  // 最初に一度だけ実行される処理
  createCanvas(400, 400);
  noStroke(); // 枠線を描かない
}

function draw() {
  // 何度も繰り返し実行される処理
  background(137, 189, 222); // 空色
  if (mouseIsPressed) {
    circle(mouseX, mouseY, 50); // マウスの位置に円を描画
  }
}
