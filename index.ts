interface iSim{
    credito:number
    numeroChiamate:number
    costo:number
}

class User implements iSim{

    nome:string
    cognome:string
    credito:number
    numeroChiamate:number
    costo:number

    constructor(_nome:string,_cognome:string,_costo:number,_credito:number=0,_numeroChiamate:number=0){
        this.nome=_nome
        this.cognome=_cognome
        this.credito=_credito
        this.numeroChiamate=_numeroChiamate
        this.costo=_costo
    }
    ricarica(aggiunta:number):number{
        return this.credito+=aggiunta
    }
    chiamata(chiamateEffettuate:number){
        let totaleCostoChiamata=this.costo*chiamateEffettuate 
        if(this.credito<totaleCostoChiamata){
           console.log('sei povero fatti na ricarica ');
        }else{
            this.numeroChiamate+=chiamateEffettuate
            this.credito-=totaleCostoChiamata
        }
    }
    chiama404():number{
        return this.credito
    }
    getNumeroChiamata():number{
        return this.numeroChiamate
    }
    azzeraChimate():number{
        return this.numeroChiamate=0
    }
}

let utente1=new User('Andrea','LV', 0.20)

console.log(utente1);//oggetto User

console.log('RICARICA',utente1.ricarica(50));//ricarica

  utente1.chiamata(180);//credito aggiornato
 
console.log('CREDITO AGGIORNATO',utente1.chiama404())//riporta credito

console.log('RIPORTA MINUTI CHIAMTA',utente1.getNumeroChiamata());//riporta minuti in chiamata

