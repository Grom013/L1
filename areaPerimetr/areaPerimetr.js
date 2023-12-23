class Shape {
  // объявляем родительский класс
  constructor() {}
  perimetrCircle() {
    return 2 * Math.PI * this.radius; // создаем методы для вычисления периметра и площади
  } // все формулы берем из школьного учебника по геомет
  perimetrTriangle() {
    return this.s1 + this.s2 + this.s3;
  }
  perimetrRectangle() {
    return 2 * (this.s1 + this.s2);
  }
  areaCircle() {
    return Math.PI * this.radius ** 2;
  }
  areaTriangle() {
    return Math.sqrt(
      (this.perimetrTriangle() / 2) *
        (this.perimetrTriangle() / 2 - this.s1) *
        (this.perimetrTriangle() / 2 - this.s2) *
        (this.perimetrTriangle() / 2 - this.s3)
    );
  }
  areaRectangle() {
    return this.s1 * this.s2;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
}
class Triangle extends Shape {
  constructor(s1, s2, s3) {
    super();
    this.s1 = s1;
    this.s2 = s2;
    this.s3 = s3;
  }
}
class Rectangle extends Shape {
  constructor(s1, s2) {
    super();
    this.s1 = s1;
    this.s2 = s2;
  }
}

const circle = new Circle(5);
const triangle = new Triangle(2, 3, 4);
const rectangle = new Rectangle(3, 4);

console.log(circle.perimetrCircle());
console.log(triangle.perimetrTriangle());
console.log(rectangle.perimetrRectangle());
console.log(circle.areaCircle());
console.log(triangle.areaTriangle());
console.log(rectangle.areaRectangle());
