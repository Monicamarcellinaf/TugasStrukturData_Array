console.log("Tugas Struktur Data");
console.log("Nama : Monica Marcellina Fadzrin");
console.log("Nim  : 24552011249");
console.log("Nim  : TIF RM 24A");
console.log(" ");

// No 1. Frequent number
// [1, 1, 2, 2, 2, 3, 3, 3, 3,]
// munculkan dalam bentuk object dengan hasil seperti ini :
// [1:2. 2:3. 3:4] object output



console.log("Tugas No. 1");
const numbers = [1, 1, 2, 2, 2, 3, 3, 3, 3];

const frequency = {};

numbers.forEach(num => {
    frequency[num] = (frequency[num] || 0) + 1;
});

console.log(frequency);


// find the unique element
// [1, 2, 2, 3, 3, 4, 5, 5]
// dengan hasil : ada = [1, 4] & gak ada = []

console.log("");
console.log("Tugas No.2");
function findUniqueElements(arr) {
    const count = {};
    const ada = [];

    // Hitung kemunculan setiap elemen
    for (const num of arr) {
        count[num] = (count[num] || 0) + 1;
    }

    // Masukkan elemen yang unik ke dalam "ada"
    for (const num in count) {
        if (count[num] === 1) {
            ada.push(Number(num));
        }
    }

    // "gak ada" selalu kosong
    const gakAda = [];

    return { ada, gakAda };
}

const inputArray = [1, 2, 2, 3, 3, 4, 5, 5];
const result = findUniqueElements(inputArray);
console.log("ada =", result.ada); // [1, 4]
console.log("gak ada =", result.gakAda); // []

// check the similarity
// -{7, 8, 9]
// -[7, 9, ,10, 11] 
// dengan hasil output [7, 9]

console.log("");
console.log("Tugas No.3");

// Definisikan dua array
const array1 = [7, 8, 9];
const array2 = [7, 9, 10, 11];

// Fungsi untuk menemukan elemen yang sama
function findCommonElements(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}

// Panggil fungsi dan simpan hasilnya
const commonElements = findCommonElements(array1, array2);

// Tampilkan hasil output
console.log(commonElements); // Output: [7, 9]