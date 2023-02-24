/* eslint-disable max-classes-per-file */
const readlineSync = require('readline-sync');

class Area {
  /* eslint-disable class-methods-use-this */
  circle(radius) {
    return 3.14 * radius * radius;
  }

  square(side1) {
    return side1 * side1;
  }

  rectangle(side1, side2) {
    return side1 * side2;
  }

  triangle(side1, side2, side3) {
    // Semi-perimeter
    const s = (side1 + side2 + side3) / 2;
    return (
      Math.sqrt(s * (s - side1) * (s - side2) * (s - side3))
    );
  }
  /* eslint-enable class-methods-use-this */
}

class MyClass extends Area {
  constructor() {
    super();
    /* eslint-disable no-unused-expressions */
    this.radius;
    this.side1;
    this.side2;
    this.side3;
    this.area;
    /* eslint-enable no-unused-expressions */
  }

  static main() {
    const myObj = new MyClass();

    do {
      console.log('0. Exit');
      console.log('1. Circle');
      console.log('2. Square');
      console.log('3. Rectange');
      console.log('4. Triangle');

      this.choice = parseInt(readlineSync.question('\n\nEnter a number from 0-4 to choose an operation: '), 10);

      if (this.choice === 0) {
        console.log('\nExiting...\n');
        break;
      } else if (this.choice === 1) {
        this.radius = parseFloat(readlineSync.question('\nEnter the radius of the circle: '));
        this.area = myObj.circle(this.radius);
        console.log(`\nThe area of the circle is ${this.area}\n\n`);
      } else if (this.choice === 2) {
        this.side1 = parseFloat(readlineSync.question('\nEnter the side of the square: '));
        this.area = myObj.square(this.side1);
        console.log(`\nThe area of the square is ${this.area}\n\n`);
      } else if (this.choice === 3) {
        this.side1 = parseFloat(readlineSync.question('\nEnter the 1st side of the rectangle: '));
        this.side2 = parseFloat(readlineSync.question('\nEnter the 2nd side of the rectangle: '));
        this.area = myObj.rectangle(this.side1, this.side2);
        console.log(`\nThe area of the rectangle is ${this.area}\n\n`);
      } else if (this.choice === 4) {
        this.side1 = parseFloat(readlineSync.question('\nEnter the 1st side of the triangle: '));
        this.side2 = parseFloat(readlineSync.question('\nEnter the 2nd side of the triangle: '));
        this.side3 = parseFloat(readlineSync.question('\nEnter the 3rd side of the triangle: '));
        this.area = myObj.triangle(this.side1, this.side2, this.side3);
        console.log(`\nThe area of the triangle is ${this.area}\n\n`);
      } else {
        console.log('\nInvalid Input!!!\n');
        continue; // eslint-disable-line no-continue
      }
    } while (this.choice !== 0);
  }
}

MyClass.main();
