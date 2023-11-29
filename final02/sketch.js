function setup() {
    // 制作一个 720 像素宽 400 像素高的画布。
    createCanvas(720, 400);
  }
  
  function draw() {
    // 将背景设置为黑色，关闭填色功能。
    background('#00EC00');
    noFill();
  
    // point() 函数的两个参数分别为指定的坐标。
    // 第一个参数是 x 坐标，第二个参数是 y 。
    stroke(255);
    point(width * 0.5, height * 0.5);
    point(width * 0.5, height * 0.25);
  
    // 坐标用于绘制所有形状，而不仅仅是点。
    // 不同功能的参数用于不同的目的。例如，line() 的前两个参数指定第一个端点的坐标，后两个参数指定第二个端点的坐标。
    stroke(235, 0, 0);
    line(0, height * 0.33, width, height * 0.33);
  
    // 默认情况下，rect() 的前两个参数是左上角的坐标，后两个参数是宽度和高度。
    stroke(255, 153, 0);
    rect(width * 0.25, height * 0.1, width * 0.5, height * 0.8);
  }
  