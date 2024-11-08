let cloud_box = [];

function setup() {
  // 最初に一度だけ実行される処理
  createCanvas(400, 400);
  noStroke(); // 枠線を描かない
}

function draw() {
  // 何度も繰り返し実行される処理
  background(137, 189, 222); // 空色
  if (mouseIsPressed) {
    cloud_box.push({ x: mouseX, y: mouseY }); // マウスの位置に雲を追加
  }
  for (let i = 0; i < cloud_box.length; i++) {
    let cloud = cloud_box[i];
    circle(cloud.x, cloud.y, 50); // 雲を描画
    cloud.x -= 0.5; // 左方向に移動
  }
}
