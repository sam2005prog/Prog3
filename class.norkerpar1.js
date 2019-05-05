class Norkerpar1 extends LivingCreature{
    constructor(x, y, index){
        super(x, y, index);
        this.energy = 17;
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
        return super.chooseCell(t)
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