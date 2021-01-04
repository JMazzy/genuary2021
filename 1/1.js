// January 1, 2021
// Prompt: TRIPLE NESTED LOOP

const s = p => {
  const width = 800;
  const height = 600;
  var colorOffset = 0;
  
  p.setup = function () {
    p.createCanvas(width, height);
  };

  p.draw = function () {
    p.background(0);
    p.stroke(100);

    for (var i = 0; i < width; i += 10) {
      for (var j = 0; j < height; j += 10) {
        for (var k = 0; k < 360; k += 15) {
          colorOffset += 1;
          p.rotate(k);
          let color = p.color((i + colorOffset) % 255, (j + colorOffset) % 255, (k + colorOffset) % 255);
          p.fill(color);
          p.rect(i, j, k, k);
        }
      }
    }
  };
};

new p5(s, "p5-container");