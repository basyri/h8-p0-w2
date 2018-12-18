console.log('Barisan Bintang')
var rows1 = 5

for(var i = 0; i < rows1; i++){
    console.log('*')
}


console.log('Barisan Bintang Dengan Nested Looping')
console.log('----------------')
var rows2 = 5
var star = ''
for(var i = 0 ; i < rows2; i++){
  for(var j = 0; j < rows2; j++){
    star += '*'
     
   }
console.log(star)
star = ''
}

console.log('Barisan Tangga Bintang Dengan Nested Looping')
console.log('----------------')
var rows3 = 5
var star = ''
for(var i = 0 ; i < rows3; i++){
  for(var j = i; j <= i; j++){
    star += '*'
    console.log(star)
    }
    
}



