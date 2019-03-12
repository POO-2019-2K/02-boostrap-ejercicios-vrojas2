import Reservacion from "./Reservacion.js";
import Huesped from "./Husped.js";

class Main {
    constructor() {
        this._reservacion = new Reservacion(document.querySelector("#reservacion"), document.querySelector("#info"));

        document.querySelector("#btnAdd").addEventListener("click", () => {
            let name = document.querySelector("#name").value;
            let tipoHabitacion = document.querySelector("#tipoHabitacion").value;
            let dateLlegada = document.querySelector("#dateLlegada").value;
            let dateSalida = document.querySelector("#dateSalida").value;

            let huesped = new Huesped(name, tipoHabitacion, dateLlegada, dateSalida);
            
            this._reservacion.addHuesped(huesped);

        });
    }
}
let m = new Main();