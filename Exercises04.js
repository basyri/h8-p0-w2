var tanggal = 12 // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 4 // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 1995 // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

switch(tanggal && bulan && tahun){
    case 12:
    case 4:
    case 1995:
        console.log('12 April 1995')
        break
    default:
        console.log('Data tidak dimasukkan')
}
