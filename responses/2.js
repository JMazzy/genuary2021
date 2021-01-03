// Prompt: Rule 30

/* 
current pattern	            111	110	101	100	011	010	001	000
new state for center cell	 0 	 0	 0	 1	 1	 1	 1	 0
*/

const width = 800;
const height = width/2;
const center = Math.round(width / 2);
var startingState = [];
for (var i = 0; i < width; i++) {
    startingState[i] = i === center ? 1 : 0;
}
var states = [startingState];
var current = states[states.length - 1];

function evaluateRule(pattern) {
    switch (pattern) {
        case "111":
        case "110":
        case "101":
        case "000":
            return 0;
        case "100":
        case "011":
        case "010":
        case "001":
            return 1;
        default:
            return 0;
    }
}

function getNextState(current) {
    var next = [];
    for (var i = 0; i < width - 2; i++) {
        let pattern = "" + current[i] + current[i + 1] + current[i + 2];
        next[i + 1] = evaluateRule(pattern);
    }
    return next;
}

const s = p => {
    p.setup = function () {
        p.createCanvas(width, height);
        p.noStroke();
        p.background(0);
    };

    p.draw = function () {
        var currentIdx = states.length - 1;

        if (states.length < height) {
            states.push(getNextState(states[currentIdx]));
        }

        for (var i = 0; i < width; i++) {
            if (states[currentIdx][i] === 1){
                var c = p.color("hsl(" + currentIdx % 255 + ",50%,50%)");
                p.fill(c);
                p.rect(i, currentIdx, 1, 1);
            }
        }
    };
};

new p5(s, "p5-container");

