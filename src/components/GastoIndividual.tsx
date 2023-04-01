import { Gasto } from "../interfaces/Gasto.interface"


interface Props {
  gasto: Gasto;
  eliminarGasto: React.Dispatch<React.SetStateAction<any>>;
  setTotal: React.Dispatch<React.SetStateAction<number>>; 
  total: number;

}


export const GastoIndividual = ({ gasto, eliminarGasto, setTotal, total }: Props) => {

  return (
    <li className="list-group">
      <div className="d-flex justify-content-between align-items-center m-2">
        <p className="p-1 m-0 text-capitalize">{gasto.nombre}</p>
        <div className="d-flex align-items-center">
          <span className=" p-2 m-2 rounded-3 bg-dark text-light"><i className="bi bi-currency-dollar"></i> {gasto.cantidad}</span>
          <button onClick={()=> {
            eliminarGasto(gasto.id);
            setTotal(total + parseInt(gasto.cantidad.toString()));
            }}

             className="btn btn-danger">X</button>
        </div>
      </div>
    </li>
  )
}



