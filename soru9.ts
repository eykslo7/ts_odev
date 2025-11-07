abstract class Shape {
  /* ??? */ // abstract getArea metodu
  abstract getArea(): number;
}

class Circle extends Shape {
  /* ??? */ 
  
  // constructor (radius: number)
  // getArea implementasyonu (Math.PI kullanın)
  constructor (private radius: number){
    super();
  }

  getArea(): number {
      return Math.PI * this.radius * this.radius;
  }
}


const circle = new Circle(10); // 10 yarıçaplı
console.log(circle.getArea());

// BEKLENEN EKRAN ÇIKTISI:
// 314.1592653589793