import { Gasto } from "../interfaces/Gasto.interface"


interface Props {
  gasto: Gasto
}


export const GastoIndividual = ({ gasto }: Props) => {
  return (
    <li className="list-group ">
      <div className="d-flex justify-content-between m-2 ">
        <p className="p-1 m-2 text-capitalize">{gasto.nombre}</p>
        <span className=" p-2 m-2 rounded-3 bg-dark text-light"><i className="bi bi-currency-dollar"></i> {gasto.cantidad}</span>
      </div>
    </li>
  )
}

/* 
<li className="list-group">
  <div className="d-flex justify-content-between align-items-center m-2">
    <p className="p-1 m-0 text-capitalize">{gasto.nombre}</p>
    <div className="d-flex align-items-center">
      <span className=" p-2 m-2 rounded-3 bg-dark text-light"><i className="bi bi-currency-dollar"></i> {gasto.cantidad}</span>
      <button className="btn btn-danger">X</button>
    </div>
  </div>
</li>
 */