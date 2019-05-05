class Gishatich extends LivingCreature{
    constructor(x, y, index){
        super(x, y, index);
        this.energy = 12;
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
                return super.chooseCell(t)
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