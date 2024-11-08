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
    cloud_box.push({ x: mouseX, y: mouseY, size: 50, alpha: 255 });
  }
  for (let i = 0; i < cloud_box.length; i++) {
    let cloud = cloud_box[i];
    fill(200, 200, 200, cloud.alpha * 0.25); // 影の色
    circle(cloud.x, cloud.y + 5, cloud.size); // 影を描画
    fill(255, 255, 255, cloud.alpha); // 白色で透明度を設定
    circle(cloud.x, cloud.y, cloud.size); // 円を描画
    cloud.x -= 0.5; // 左方向に移動
    cloud.alpha -= 0.5; // 徐々に透明に
    cloud.size += 0.1; // 徐々に大きく
  }
  // 透明度が0以下の円を削除
  cloud_box = cloud_box.filter((cloud) => cloud.alpha > 0);
}
