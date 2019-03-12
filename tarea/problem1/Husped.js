export default class Huesped {
    constructor(name, tipoHabitacion, dateLlegada, dateSalida) {
        this._name = name.toUpperCase();
        this._tipoHabitacion = tipoHabitacion;
        this._dateLlegada = dateLlegada;
        this._dateSalida = dateSalida;
    }
    
    get name() {
        return this._name;
    }

    get tipoHabitacion() {
        return this._tipoHabitacion;
    }

    get dateLlegada() {
        return this._dateLlegada;
    }

    get dateSalida() {
        return this._dateSalida;
    }

}