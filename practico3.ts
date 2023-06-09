function promedio (notas:number[]){
    let suma:number = 0;
    let promedio:number =0;
    for(let i = 0; i<notas.length;i++){
        suma = suma + notas[i]
    }
    promedio = (suma/notas.length)
    return promedio
}
let notas:number[] = [6,8,9,4]
console.log(promedio(notas))
