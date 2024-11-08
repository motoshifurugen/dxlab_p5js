let cloud_box = [];
let contrail = { x1: 0, y1: 0, x2: 0, y2: 0, alpha: 255 };
let contrailTimer = 0;

function setup() {
  createCanvas(400, 400);
  noStroke(); // 枠線を描かない
}

function draw() {
  background(137, 189, 222); // 空色

  // ランダムなタイミングで飛行機雲を描画
  if (contrailTimer <= 0 && random() < 0.01) {
    if (random() < 0.5) {
      let position = random(100, 400);
      // 左辺からスタート
      contrail = { x1: 0, y1: position, x2: 0, y2: position, alpha: 255 };
    } else {
      let position = random(0, 300);
      // 下辺からスタート
      contrail = { x1: position, y1: 400, x2: position, y2: 400, alpha: 255 };
    }
    contrailTimer = 500; // 飛行機雲の表示時間
  }

  if (contrailTimer > 0) {
    stroke(255, contrail.alpha); // 白色の線
    strokeWeight(4);
    line(contrail.x1, contrail.y1, contrail.x2, contrail.y2);
    contrail.x2 += 2; // 右上に伸びる
    contrail.y2 -= 2; // 右上に伸びる
    contrail.alpha -= 0.6; // 徐々に薄くなる
    contrailTimer--;
  }

  noStroke(); // 枠線を描かない設定に戻す

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
