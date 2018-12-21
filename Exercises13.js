function xo(str){
    var xCount = 0
    var oCount = 0

    for(var i = 0; i <= str.length; i++){
        if(str[i] === 'x'){
            xCount += 1
            
        }else if(str[i] === 'o'){
            oCount += 1
        }
        }

        if(xCount === oCount){
            return true 
        }else{
            return false
        }
}

console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true 