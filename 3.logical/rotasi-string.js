function isStringRotation(string1, string2) {
    // Mengubah kedua string menjadi lowercase untuk memastikan perbandingan case insensitive
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();
  
    // Jika panjang kedua string berbeda, maka string2 tidak mungkin merupakan rotasi dari string1
    if (string1.length !== string2.length) {
      return false;
    }
  
    // Menggabungkan string1 dengan dirinya sendiri
    const concatenatedString = string1 + string1;
  
    // Mengecek apakah string2 terdapat dalam concatenatedString
    if (concatenatedString.includes(string2)) {
      return true;
    } else {
      return false;
    }
  }
  
  const case1 = isStringRotation("keyboard", "oardkeyb")
  const case2 = isStringRotation("keyboard", "draobyek")
  console.log('Case 1:',case1);
  console.log('Case 2:',case2);
  