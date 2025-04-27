function divideAndSort(number) {
    const parts = String(number).split('0') // menggunakan built-in function. bisa menggunakan built-in method (to.String) 
    const sortedParts = parts.map(part => // map untuk akses array
      part.split('').sort().join('') //sort untuk mengurutkan
    )
    const result = (sortedParts.join(''))
    console.log(Number(result));
}
  
 divideAndSort(5956560159466056)