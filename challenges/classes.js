// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {

    constructor(attr){

        this.length = attr.length;
        this.width = attr.width;
        this.height = attr.height;
    }

    volume () {

        return (this.height * this.length * this.width);
      }

    surfaceArea () {

        return (2 *(this.length * this.width + this.length * this.height + this.width * this.height));
      }
      
      
}

cuboid = new CuboidMaker({

    length: 4,
    width: 5,
    height: 5,
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
 console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {

    constructor(attr){
        super(attr);

    }

    surfA () {
        return 6*Math.pow(this.height, 2)
    }

    cubeVolume (){
        return Math.pow(this.height, 3);
    }
}

cube = new CubeMaker({

    height: 2,
    width: 2,
    length: 2,
});

console.log(cube);
console.log(cube.surfA());
console.log(cube.cubeVolume());
