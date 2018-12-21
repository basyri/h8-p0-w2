function konversiMenit(num){
    
    if(num !== 0){
        var jam = num/60
        var num = num % 60
      }
      if(num < 10){
        return (Math.floor(jam) + ':0' + num)
      }else{
        return (Math.floor(jam) + ':' + num)
      }
      
}
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00