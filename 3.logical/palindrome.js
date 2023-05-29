function isPalindrome(string) {
  // Mengubah string menjadi lowercase untuk memastikan perbandingan case insensitive
  string = string.toLowerCase();

  // Menghapus spasi dari string menggunakan regex
  string = string.replace(/\s/g, '');

  // Mengambil string terbalik
  const reversedString = string.split('').reverse().join('');

  // Mengecek apakah string asli sama dengan string terbalik
  if (string === reversedString) {
    return true;
  } else {
    return false;
  }
}

const case1 = isPalindrome("kasur rusak");
const case2 = isPalindrome("kasur");
console.log('Case 1:', case1);
console.log('Case 2:', case2);