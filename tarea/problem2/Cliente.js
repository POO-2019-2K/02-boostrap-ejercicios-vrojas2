export default class Cliente {
    constructor(name, domicilio, telefono, cuenta, deposito, retiro) {
        this._name = name;
        this._domicilio = domicilio;
        this._telefono = telefono;
        this._cuenta = cuenta;
        this._deposito = deposito;
        this._retiro = retiro;
    }

    get nombre() {
        return this._nombre;
    }
    
    get domicilio() {
        return this._domicilio;
    }

    get telefono() {
        return this._telefono;
    }

    get cuenta() {
        return this._cuenta;
    }

    get deposito() {
        return this._deposito;
    }

    get retiro() {
        return this._retiro;
    }

}