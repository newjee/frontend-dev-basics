/**
 * 
 * class Rect
 * 
 */

class Rect {
  constructor(w,h) {
    this.w = w;
    this.h = h;
  }

  draw() {
    console.log(`Rect(w=${this.w}, h=${this.h})를 그렸습니다.  `);
  }
}
  const rect1 = new Rect(10, 20);
  
  rect1.draw();

  /**
   * 
   * cf. 생성자 함수 (prototype )기반
   */

  const Circle = (x,y,r)=>{
    this.x = x;
    this.y = y;
    this.z = z;
  }

  // Circle.prototype.draw=() => 
  // {
  //   console.log();
  // }

  // //test
  // const circle1 = new Circle(10, 20,5);
  // circle1.draw();


  /**
   * extends
   */

  class Shape {

    constructor(fillColor, lineColor){
      this.fillColor = fillColor;
      this.lineColor = lineColor;
    }

    draw() {
      console.log("그릴 수 없습니다.");
    }

    area() {
      console.log("구할 수 없습니다.");

    }

  }

  class RectTriangle extends Shape {
    
    constructor(w, h, fillColor, lineColor) {
      super(fillColor, lineColor);
      this.w = w;
      this.h = h;
    }

    draw() {
      console.log(`RectTriangle( w = ${this.w}, 을 그렸습니다.  `);
    }

  }

  const shape1 = new RectTriangle(10, 20, 'red', 'blue');

  
  console.log(shape1.draw());