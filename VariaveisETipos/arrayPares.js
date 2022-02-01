function subtituirPares(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] === 0){
        console.log("É um número Zero!")
        } else if(array[i] % 2 === 0 ){
            console.log(`Substituindo ${array[i]} por 0...`);    
            array[i] = 0;
        }
    }
    return array;
}


let arrays = [0, 2,3,6,76,4,32,78,900,2345];

subtituirPares(arrays);

console.log(arrays)