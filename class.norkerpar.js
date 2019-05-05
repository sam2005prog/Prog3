class Norkerpar extends LivingCreature{
    constructor(x, y, index){
        super(x, y, index);
        this.energy = 13;
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
        return super.chooseCell(t)
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