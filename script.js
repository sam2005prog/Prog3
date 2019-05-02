function genetareMatrix(lengthY, lengthX, number) {

    let matrix = [];

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    for (let y = 0; y < lengthY; y++) {
        matrix.push([]);
        for (let x = 0; x < lengthX; x++) {
            let randomCount = getRandomInt(number);
            matrix[y].push(randomCount);
        }
    }
    return matrix;

}
let matrix = genetareMatrix(40, 40, 6);
let gishatichArr = []
var side = 15;
let grassArr = [];
let eatgrassArr = [];
let norkerparArr = [];
let norkerpar1Arr = [];
function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var eatgrass = new GrassEater(x, y);
                eatgrassArr.push(eatgrass);
            }
            else if (matrix[y][x] == 3) {
                var gishat = new Gishatich(x, y);
                gishatichArr.push(gishat);
            }
            else if (matrix[y][x] == 4) {
                var norkerp = new Norkerpar(x, y);
                norkerparArr.push(norkerp);
            }
            else if (matrix[y][x] == 5) {
                var norkerp1 = new Norkerpar1(x, y);
                norkerpar1Arr.push(norkerp1);
            }
        }
    }

}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("orange");
                rect(x * side, y * side, side, side);
            }
        }
    }
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in eatgrassArr) {
        eatgrassArr[i].eat();
    }
    for (var i in gishatichArr) {
        gishatichArr[i].eat()
    }
    for (var i in norkerparArr) {
        norkerparArr[i].eat()
    }
    for (var i in norkerpar1Arr) {
        norkerpar1Arr[i].eat()
    }
}  