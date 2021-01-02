// Prompt:
// TRIPLE NESTED LOOP

const width = 800;
const height = 600;

const s = p => {
    p.setup = function() {
      p.createCanvas(width, height);
      p.background(0);
      p.stroke(100);
        
      for (var i = 0; i < width; i+=10){
          for (var j = 0; j < height; j+=10){
              for (var k = 0; k < 360; k+=15){
                p.rotate(k);
                let color = p.color(i % 255, j % 255, k % 255);
                p.fill(color);
                p.rect(i, j, k, k);
              }
          }
      }
    };
  
    p.draw = function() {
      
    };
  };

new p5(s, "p5-container");