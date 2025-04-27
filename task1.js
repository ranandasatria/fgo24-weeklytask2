const fetchData = (status) => {
    return new Promise((resolve, reject) => {
        if(status){
            setTimeout(()=>{
                resolve("Data berhasil disimpan")
            }, 3000)
        }else{
            reject("Gagal mengambil data")
        }
    })
}

// 1. then-catch: 
// then-catch adalah cara untuk menangani Promise di JavaScript.
// then dipakai untuk mengeksekusi sesuatu kalau Promise berhasil (resolved).
// catch dipakai untuk menangkap error kalau Promise gagal (rejected).

fetchData(true).then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  }
);


// 2. async-await + try-catch
// async-await adalah cara yang lebih modern dan rapi untuk bekerja dengan Promise.
// Fungsi harus diberi async supaya bisa menggunakan await.
// await akan "menunggu" hasil dari Promise sebelum lanjut ke baris berikutnya.
// try-catch dipakai untuk menangkap error supaya program tidak langsung berhenti kalau ada masalah.
// try berisi kode yang mau dijalankan, catch berisi apa yang harus dilakukan kalau ada error

const asyncData = async() => {
    try {
      const result = await fetchData(true);
      console.log(result);
    }catch(error) {
      console.log(error);
    }
  };
  
asyncData();


// Hanya async-await tanpa handling untuk error
async function doingProcess(){
  const result = await fetchData(true)
  console.log(result)
}

doingProcess()
