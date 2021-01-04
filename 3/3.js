// January 3, 2021
// Prompt: Make something human

const s = p => {
    const width = 400;
    const height = 300;

    p.setup = function () {
        p.createCanvas(width, height);
    };

    p.draw = function () {
        var radius = 20;
        var x = width / 2;
        var y = height / 2;
        var bodyHeight = 40;
        var neckLength = bodyHeight / 4;
        var armLength = 20;
        var legLength = 20;

        p.background(0);
        p.noFill();
        p.stroke(255);
        p.strokeWeight(2);
        p.circle(x, y, radius * 2);
        p.circle(x + radius/2, y, 4);
        p.circle(x - radius/2, y, 4);
        p.ellipse(x, y + radius/2, 8, 10);
        p.line(x, y + radius, x, y + radius + bodyHeight);
        p.line(x, y + radius + neckLength, x + armLength, y + radius + neckLength - armLength);
        p.line(x, y + radius + neckLength, x - armLength, y + radius + neckLength - armLength);
        p.line(x, y + radius + bodyHeight, x + armLength, y + radius + bodyHeight + legLength);
        p.line(x, y + radius + bodyHeight, x - armLength, y + radius + bodyHeight + legLength);
    };
};

new p5(s, "p5-container");