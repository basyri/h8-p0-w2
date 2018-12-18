console.log('LOOPING PERTAMA')
var i = 2
while(i <= 20){
  console.log(i, " - I love coding")
  i += 2;
}

console.log('---------------')
console.log('LOOPING KEDUA')
var i = 20
while(i >= 2){
  console.log(i, " - I love coding")
  i -= 2;
}

console.log('---------------')
console.log('LOOPING PERTAMA FOR')
for(var j = 1; j <= 20; j++){
   console.log(j, " - I love coding")
}

console.log('---------------')
console.log('LOOPING KEDUA FOR')
for(var j = 20; j >= 1; j--){
   console.log(j, " - I love coding")
}

console.log('---------------')
console.log('LOOPING GANJIL GENAP')
for(var j = 1; j <= 100; j++){
  if(j % 2 == 0)
   console.log('GEANAP')
  else{
   console.log('GANJIL')

  }
}

console.log('---------------')
console.log('LOOPING GANJIL GENAP')
for(var j = 1; j <= 100; j++){
  if(j % 2 == 0)
   console.log('GEANAP')
  else{
   console.log('GANJIL')

  }
}

console.log('---------------')
console.log('LOOPING PERTAMBAHAN 2')
for(var j = 1; j <= 100; j += 2){
  if(j < 2){
   console.log('')
  }else{
   console.log(j, 'KELIPATAN', j)

  }
}

console.log('---------------')
console.log('LOOPING PERTAMBAHAN 5')
for(var j = 1; j <= 100; j += 5){
  if(j < 5){
   console.log('')
  }else{
   console.log(j, 'KELIPATAN', j)

  }
}

console.log('---------------')
console.log('LOOPING PERTAMBAHAN 9')
for(var j = 1; j <= 100; j += 9){
  if(j < 9){
   console.log('')
  }else{
   console.log(j, 'KELIPATAN', j)
  }
}


