function setup() {
    createCanvas(1100, 500, WEBGL);
  }
  
  function draw() {
    background(1555);
    let radius = width * 1;
  
    //drag to move the world.
    orbitControl();
  
    normalMaterial();
    translate(0, 0, -500);
    for (let i = 0; i <= 10; i++) {
      for (let j = 0; j <= 10; j++) {
        push();
        let a = (j / 10) * PI;
        let b = (i / 10) * PI;
        translate(
          sin(2 * a) * radius * sin(b),
          (cos(b) * radius) / 2,
          cos(2 * a) * radius * sin(b)
        );
        if (j % 2 === 0) {
          cone(40, 40);
        } else {
          box(40, 40, 40);
        }
        pop();
      }
    }
  }
  