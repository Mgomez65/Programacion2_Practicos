class CuentaSalario{
    saldo 
    constructor(saldo:number){
        this.saldo=saldo
    }
    
    verSaldo(){
        console.info(this.saldo)
    }  
    retirar(cantidad:number){
        if(cantidad >= 100000){
            console.info('La cantidad a retirar es mucha')
        }else if (cantidad > this.saldo){
            console.info('Usted no dispone de esa cantidad')
        }else{
            this.saldo = this.saldo - cantidad
        }
    }
    ingresar(cantidad:number){
        if (cantidad >= 50000){
            console.info('La cantida deseada es mayor a lo permitido')
        } else{
            this.saldo= this.saldo + cantidad
        }
        }
    }


let ingreso = new CuentaSalario(100)
ingreso.ingresar(500)
ingreso.ingresar(500000)
ingreso.retirar(700)
ingreso.retirar(100)
ingreso.verSaldo()

