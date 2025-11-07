function sum(/* ??? */...numbers: number[]): number {
  /* ??? */ return  numbers.reduce((toplam, n) => toplam + n, 0);
  // 'reduce' kullanarak tüm sayıları toplayın
}

console.log(sum(1, 2, 3));
console.log(sum(10, 20, 30, 40));

// BEKLENEN EKRAN ÇIKTISI:
// 6
// 100