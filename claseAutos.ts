class autos{
    marca
    modelo
    velMax
    potencia
    constructor(marca,modelo,velMax,potencia){
        this.marca = marca
        this.modelo = modelo
        this.velMax = velMax
        this.potencia = potencia
    }
    mostas(){
        for(let i in this.marca ){
        console.info(this.marca[i])
        }
    }
    calcularTiempo( distancia:number,velocidad:number){
        let tiempo:number = distancia/velocidad
        return tiempo
    }

}
let auto =['fiat uno','fiat mobi','chebrolet camaro','fiat siena','peugeot 207']
let modelo =['2007','2015','1099','2008','2012']
let velMax =['180','180','210','160','160']
let potencia =['fait uno','fiat mobi','chebrolet camaro','fiat siena','peugeot 207']


let a1 = new autos(auto,modelo,'','')
a1.mostas()
console.info(a1.calcularTiempo(1,50))

