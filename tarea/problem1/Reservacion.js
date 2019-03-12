export default class Reservacion {
    constructor(tableReservacion, tableInfo) {
        this._tableReservacion = tableReservacion;
        this._tableInfo = tableInfo;

        this._numReservaciones = 0;
    }

    addHuesped(huesped) {
        let row = this._tableReservacion.insertRow(-1);
        let cellName = row.insertCell(0);
        let cellTipoHabitacion = row.insertCell(1);
        let celldateLlegada = row.insertCell(2);
        let celldateSalida = row.insertCell(3);

        cellName.innerHTML = huesped.name;
        cellTipoHabitacion.innerHTML = huesped.tipoHabitacion;
        celldateLlegada.innerHTML = huesped.dateLlegada;
        celldateSalida.innerHTML = huesped.dateSalida;

        this._numReservaciones++;
        
        this._tableInfo.rows[0].cells[1].innerHTML = this._numReservaciones;
    }
}