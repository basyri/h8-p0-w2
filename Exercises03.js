var nama = 'husain'
var peran = 'Tabib'

if (peran === ''){
    console.log('Hallo', nama , ', Pilih peranmu untuk memulai game!')
}
else if(peran === 'Ksatria'){
    console.log('Selamat datang di Dunia Proxytia, ', nama)
    console.log("Halo Ksatria ", nama, ", kamu dapat menyerang dengan senjatamu!")
}
else if(peran === 'Tabib'){
    console.log('Selamat datang di Dunia Proxytia, ', nama)
    console.log("Halo Tabib ", nama, ", kamu akan membantu temanmu yang terluka.")
}
else{
    console.log('Selamat datang di Dunia Proxytia, ', nama)
    console.log("Halo Penyihir ", nama, ", ciptakan keajaiban yang membantu kemenanganmu!")
}


