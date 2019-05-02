class Grass {
    constructor(x, y, ) {
        this.x = x;
        this.y = y;

        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(0));
        if (newCell) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        }
    }
}

class GrassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index
        this.multiply = 0;
        this.energy = 2;
        this.directions = [];
    }

    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(t) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    move() {
        var found1 = this.chooseCell (0);
        var cord = random(found1);

        if (cord) {
            var x = cord[0];
            var y = cord[1];
            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;

        }
    }
    eat() {
        var fundCords = this.chooseCell(1);
        var cord = random(fundCords);
        if (cord) {
            var x = cord[0];
            var y = cord[1];
            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            this.multiply++;
            this.energy++;
            for (var i in grassArr) {
                if (x == grassArr[i].x && y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                }
            }
            if (this.multiply == 15) {
                this.mul()
                this.multiply = 0;
            }


        } else {
            
            this.move();
            this.energy--;
            if (this.energy <= 0) { 
                this.die();
            }
        }
    }
    mul() {
        //փնտրում է դատարկ տարածք
        var fundCords = this.chooseCell(0);
        var cord = random(fundCords);
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            this.multiply++;
            var norXotaker = new GrassEater(x, y, this.index);
            eatgrassArr.push(norXotaker);

            
            matrix[y][x] = 2;
            this.multiply = 0; 
        } 
    }

    
    die() {
        
        matrix[this.y][this.x] = 0;

       
        for (var i in eatgrassArr) {
            if (this.x == eatgrassArr[i].x && this.y == eatgrassArr[i].y) {
                eatgrassArr.splice(i, 1);
            }
        }
    }

        }
        class Gishatich {
            constructor(x, y, index) {
                this.x = x;
                this.y = y;
                this.index = index
                this.multiply = 0;
                this.energy = 12;
                this.directions = [];
            }
            newDirections() {
                this.directions = [
                    [this.x - 1, this.y - 1],
                    [this.x, this.y - 1],
                    [this.x + 1, this.y - 1],
                    [this.x - 1, this.y],
                    [this.x + 1, this.y],
                    [this.x - 1, this.y + 1],
                    [this.x, this.y + 1],
                    [this.x + 1, this.y + 1]
                ];
            }
            chooseCell(t) {
                this.newDirections();
                var found = [];
                for (var i in this.directions) {
                    var x = this.directions[i][0];
                    var y = this.directions[i][1];
                    if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                        if (matrix[y][x] == t) {
                            found.push(this.directions[i]);
                        }
                    }
                }
                return found;
            }
            move() {
                var found1 = this.chooseCell (0);
                var cord = random(found1);
        
                if (cord) {
                    var x = cord[0];
                    var y = cord[1];
                    matrix[y][x] = 3;
                    matrix[this.y][this.x] = 0;
                    this.x = x;
                    this.y = y;
                }
            } 
            eat() {
                var fundCords = this.chooseCell  (2);
                var cord = random(fundCords);
                if (cord) {
                    var x = cord[0];
                    var y = cord[1];
                    matrix[y][x] = 3;
                    matrix[this.y][this.x] = 0;
                    this.x = x;
                    this.y = y;
                    this.multiply++;
                    this.energy++;
                    for (var i in gishatichArr) {
                        if (x == gishatichArr[i].x && y == gishatichArr[i].y) {
                            gishatichArr.splice(i, 1);
                        }
                    }
                    if (this.multiply == 2) {
                        this.mul()
                        this.multiply = 0;
                    }
        
        
                } else {
                    
                    this.move();
                    this.energy--;
                    if (this.energy <= 0) { 
                        this.die();
                    }
                }
            }
            mul() {
                var fundCords = this.chooseCell(0);
                var cord = random(fundCords);
                if (cord) {
                    var x = cord[0];
                    var y = cord[1];
        
                    this.multiply++;
                    var norgishatich = new Gishatich(x, y, this.index);
                    gishatichArr.push(norgishatich);
        
                    
                    matrix[y][x] = 3;
                    this.multiply = 0; 
                } 
            }
            die() {
        
                matrix[this.y][this.x] = 0;
        
               
                for (var i in gishatichArr) {
                    if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                        gishatichArr.splice(i, 1);
                    }
                }
            }
          
        }
class Norkerpar{
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index
        this.multiply = 0;
        this.energy = 13;
        this.directions = [];
    }
    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    newDirections1() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(t) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    chooseCell1(t) {
        this.newDirections1();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions1[i][0];
            var y = this.directions1[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions1[i]);
                }
            }
        }
        return found;
    }
    move() {
        var found1 = this.chooseCell (0);
        var cord = random(found1);

        if (cord) {
            var x = cord[0];
            var y = cord[1];
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
        }
    } 
    eat() {
        var fundCords = this.chooseCell  (3);
        var cord = random(fundCords);
        if (cord) {
            var x = cord[0];
            var y = cord[1];
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            this.multiply++;
            this.energy++;
            for (var i in gishatichArr) {
                if (x == gishatichArr[i].x && y == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1);
                }
            }
            if (this.multiply == 2) {
                this.mul()
                this.multiply = 0;
            }


        } else {
            
            this.move();
            this.energy--;
            if (this.energy <= 0) { 
                this.die();
            }
        }
    var fundCords = this.chooseCell(0);
    var cord = random(fundCords);
    if (cord) {
        var x = cord[0];
        var y = cord[1];
        var norXotaker = new GrassEater(x, y, this.index);
        eatgrassArr.push(norXotaker);
    }
}
    mul() {
        var fundCords = this.chooseCell(0);
        var cord = random(fundCords);
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            this.multiply++;
            var norkerp = new Norkerpar(x, y, this.index);
           norkerparArr.push(norkerp);

            
            matrix[y][x] = 4;
            this.multiply = 0; 
        } 
    }
    die() {
        
        matrix[this.y][this.x] = 0;

       
        for (var i in norkerparArr) {
            if (this.x == norkerparArr[i].x && this.y == norkerparArr[i].y) {
                norkerparArr.splice(i, 1);
            }
        }
    }
}
class Norkerpar1{
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index
        this.multiply = 0;
        this.energy = 17;
        this.directions = [];
    }
    newDirections() {
        this.directions = [
            [this.x, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x, this.y + 1],
        ];
    }
    chooseCell(t) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    move() {
        var found1 = this.chooseCell (1);
        var cord = random(found1);

        if (cord) {
            var x = cord[0];
            var y = cord[1];
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 1;
            this.x = x;
            this.y = y;
        }
    }
    eat() {
        var fundCords = this.chooseCell(2);
        var cord = random(fundCords);
        if (cord) {
            var x = cord[0];
            var y = cord[1];
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 3;
            this.x = x;
            this.y = y;
            let gish = new Gishatich(this.x,this.y)
            gishatichArr.push(gish);
            this.multiply++;
            this.energy++;
            for (var i in gishatichArr) {
                if (x == gishatichArr[i].x && y == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1);
                }
            }
            if (this.multiply == 2) {
                this.mul()
                this.multiply = 0;
            }


        } else {
            
            this.move();
            this.energy--;
            if (this.energy <= 0) { 
                this.die();
            }
        }
        
    }
    mul() {
        var fundCords = this.chooseCell(1);
        var cord = random(fundCords);
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            this.multiply++;
            var norkerp1 = new Norkerpar1(x, y, this.index);
           norkerpar1Arr.push(norkerp1);

            
            matrix[y][x] = 5;
            this.multiply = 0; 
        }
    }
    die() {
        
        matrix[this.y][this.x] = 0;

       
        for (var i in norkerpar1Arr) {
            if (this.x == norkerpar1Arr[i].x && this.y == norkerpar1Arr[i].y) {
                norkerpar1Arr.splice(i, 1);
            }
        }
    }
}