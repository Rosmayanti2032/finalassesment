function factorial(n) {
// factorial.js


    // Basis rekursi: faktorial dari 0 adalah 1
    if (n === 0) {
        return 1;
    } else {
        // Kasus rekursif: n! = n * (n-1)!
        return n * factorial(n - 1);
    }
}



// Jangan hapus kode di bawah ini!
export default factorial;
