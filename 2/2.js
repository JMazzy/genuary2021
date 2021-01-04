// January 2, 2021
// Prompt: Rule 30

const s = p => {
    const evaluateRule = function(pattern) {
        /* 
        Wolfram Elementary Cellular Automata Rule 30
        current pattern	            111	110	101	100	011	010	001	000
        new state for center cell	 0 	 0	 0	 1	 1	 1	 1	 0
        */
    
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
    
    const getNextState = function(current, width) {
        var next = [];
        for (var i = 0; i < width - 2; i++) {
            let pattern = "" + current[i] + current[i + 1] + current[i + 2];
            next[i + 1] = evaluateRule(pattern);
        }
        return next;
    }

    const width = 800;
    const height = width/2;
    var states = [];

    p.setup = function () {
        p.createCanvas(width, height);
        p.noStroke();
        p.background(0);

        var startingState = [];
        for (var i = 0; i < width; i++) {
            startingState[i] = i === Math.round(width / 2) ? 1 : 0;
        }
        states.push(startingState);
    };

    p.draw = function () {
        var currentIdx = states.length - 1;

        if (states.length < height) {
            states.push(getNextState(states[currentIdx], width));
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

