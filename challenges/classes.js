// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130



class CuboidClass {
    constructor(attr) {
    this.length = attr.length;
    this.width = attr.width;
    this.height = attr.height;
    }
    volume() {
        let formulaVolume = this.length * this.width * this.height;
        return formulaVolume;
    }
    surfaceArea() {
        let formulaSurfaceArea = 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
        return formulaSurfaceArea;
    }
  }


  const cuboid2 = new CuboidClass( {
    length: 4,
    width: 5,
    height: 5
  })
  
  console.log(cuboid.volume()); 
  console.log(cuboid.surfaceArea()); 

  // Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidClass {
    constructor(attr) {
        super(attr);
    }
        cubeVolume() {
            let cubeVolume = this.length * this.length * this.length;
            return cubeVolume;
        }
        cubeSurface() {
            let cubeSurface = 6 * (this.length * this.length);
            return cubeSurface;
        }
    }

    const cube = new CubeMaker( {
        length: 4
      })
      console.log(cube.cubeVolume()); 
      console.log(cube.cubeSurface()); 