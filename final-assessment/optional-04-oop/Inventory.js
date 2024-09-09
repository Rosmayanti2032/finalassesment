/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */


    // inventory.js
import Item from './Item.js';

class Inventory {
    constructor() {
        this.items = [];
    }

    addItem(name, quantity, price) {
        const newItem = new Item(name, quantity, price);
        this.items.push(newItem);
    }

    removeItem(name) {
        this.items = this.items.filter(item => item.name !== name);
    }

    listItems() {
        if (this.items.length === 0) {
            console.log("Inventaris kosong.");
        } else {
            this.items.forEach(item => {
                console.log(`- ${item.name} (Jumlah: ${item.quantity}, Harga: ${item.price})`);
            });
        }
    }

    updateItem(name, newQuantity, newPrice) {
        const itemToUpdate = this.items.find(item => item.name === name);
        if (itemToUpdate) {
            itemToUpdate.quantity = newQuantity;
            itemToUpdate.price = newPrice;
        } else {
            console.log(`Barang '${name}' tidak ditemukan.`);
        }
    }
}





// Jangan hapus kode di bawah ini!
export default Inventory;
