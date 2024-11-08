let circles = [];

function setup() {
  // 最初に一度だけ実行される処理
  createCanvas(400, 400);
  noStroke(); // 枠線を描かない
}

function draw() {
  // 何度も繰り返し実行される処理
  background(137, 189, 222); // 空色
  if (mouseIsPressed) {
    circles.push({ x: mouseX, y: mouseY }); // マウスの位置に円を追加
  }
  for (let i = 0; i < circles.length; i++) {
    circle(circles[i].x, circles[i].y, 50); // 円たちを描画
    circles[i].x -= 0.5; // 左方向に移動
  }
}
