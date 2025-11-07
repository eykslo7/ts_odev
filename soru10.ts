class MathHelper {
  /* ??? */
  // Statik PI
  // Statik calculateCircumference(radius: number) metodu

  static PI: number = 3.14159;

  static calculateCircumference(radius: number): number {
    return 2 * MathHelper.PI * radius;
  }
}

// Sınıfı 'new' ile oluşturmadan doğrudan kullanın
console.log(MathHelper.PI);
console.log(MathHelper.calculateCircumference(10));

// BEKLENEN EKRAN ÇIKTISI:
// 3.14159
// 62.8318