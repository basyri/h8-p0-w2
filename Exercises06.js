console.log('LOOPING PERTAMA')
var i = 2
while (i <= 20) {
  console.log(i, " - I love coding")
  i += 2;
}

console.log('---------------')
console.log('LOOPING KEDUA')
var i = 20
while (i >= 2) {
  console.log(i, " - I love coding")
  i -= 2;
}

console.log('---------------')
console.log('LOOPING PERTAMA FOR')
for (var j = 1; j <= 20; j++) {
  console.log(j, " - I love coding")
}

console.log('---------------')
console.log('LOOPING KEDUA FOR')
for (var j = 20; j >= 1; j--) {
  console.log(j, " - I love coding")
}

console.log('---------------')
console.log('LOOPING GANJIL GENAP')
for (var j = 1; j <= 100; j++) {
  if (j % 2 == 0)
    console.log('GEANAP')
  else {
    console.log('GANJIL')

  }
}


console.log('---------------')
console.log('LOOPING PERTAMBAHAN 2')
for (var j = 1; j <= 100; j += 2) {
  if (j % 3 === 0) {
    console.log(j, 'KELIPATAN 3')
  } else {
    console.log('')

  }
}

console.log('---------------')
console.log('LOOPING PERTAMBAHAN 5')
for (var j = 1; j <= 100; j += 5) {
  if (j % 6 === 0) {
    console.log(j, 'KELIPATAN 6')
  } else {
    console.log('')

  }
}

console.log('---------------')
console.log('LOOPING PERTAMBAHAN 9')
for (var j = 1; j <= 100; j += 9) {
  if (j % 10 === 0) {
    console.log(j + ' KELIPATAN 10');
  } else {
    console.log('');
  }
}