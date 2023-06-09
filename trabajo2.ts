function sumar(lista1:number[],lista2:number[]){
    let sumas:number = 0;
    let listaSuma:number[] =[]
    for(let i = 0; i<lista1.length;i++){
        sumas = lista1[i] + lista2[i] 
        listaSuma.push(sumas)
    }    
    return listaSuma
}

let lista1:number[] = [10,17,5,6,8,1]
let lista2:number[] = [10,14,2,4,9,7]
let sumaLista = sumar(lista1,lista2)
console.log(sumaLista)

