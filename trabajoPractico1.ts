let array: number[] = [12,1,12,25,0,15];
let  valor0:boolean = false;

let maximo = Math.max(...array);
for (let i in array){
    if (array[i] == 0){
        valor0 = true
    }
}
console.log('El maximo es'+maximo)
if (valor0 == true){
    console.log('el arreglo tiene un cero ')
} 

