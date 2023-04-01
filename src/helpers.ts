export const revisarPresupuesto = (presupuesto: number, restante: number): string => {

    let clase: string;

    if ((presupuesto / 4) > restante) {
        clase = 'alert alert-danger';
    }else if((presupuesto / 2) > restante) {
        clase = 'alert alert-warning';
    }else {
        clase = 'alert alert-info';
    }

    return clase;


}