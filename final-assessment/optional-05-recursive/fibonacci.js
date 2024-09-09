function fibonacci(n) {
// fibonacci.js


    // Basis rekursi: dua elemen pertama adalah 0 dan 1
    if (n <= 1) {
        return n;
    } else {
        // Kasus rekursif: F(n) = F(n-1) + F(n-2)
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}



// Jangan hapus kode di bawah ini!
export default fibonacci;
