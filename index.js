var User = /** @class */ (function () {
    function User(_nome, _cognome, _costo, _credito, _numeroChiamate) {
        if (_credito === void 0) { _credito = 0; }
        if (_numeroChiamate === void 0) { _numeroChiamate = 0; }
        this.nome = _nome;
        this.cognome = _cognome;
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
        this.costo = _costo;
    }
    User.prototype.ricarica = function (aggiunta) {
        return this.credito += aggiunta;
    };
    User.prototype.chiamata = function (chiamateEffettuate) {
        var totaleCostoChiamata = this.costo * chiamateEffettuate;
        if (this.credito < totaleCostoChiamata) {
            console.log('sei povero fatti na ricarica ');
        }
        else {
            this.numeroChiamate += chiamateEffettuate;
            this.credito -= totaleCostoChiamata;
        }
    };
    User.prototype.chiama404 = function () {
        return this.credito;
    };
    User.prototype.getNumeroChiamata = function () {
        return this.numeroChiamate;
    };
    User.prototype.azzeraChimate = function () {
        return this.numeroChiamate = 0;
    };
    return User;
}());
var utente1 = new User('Andrea', 'LV', 0.20);
console.log(utente1); //oggetto User
console.log('RICARICA', utente1.ricarica(50)); //ricarica
utente1.chiamata(180); //credito aggiornato
console.log('CREDITO AGGIORNATO', utente1.chiama404()); //riporta credito
console.log('RIPORTA MINUTI CHIAMTA', utente1.getNumeroChiamata()); //riporta minuti in chiamata
