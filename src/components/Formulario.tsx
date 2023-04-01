import { useState } from "react"
import { ErrorMsj } from "./ErrorMsj";
import shortid from 'shortid';
import { Gasto } from "../interfaces/Gasto.interface";



export const Formulario = ({ setGastoApp, setcrearGasto }: any) => {

  // const [cantidad, setCantidad] = useState<number>(0);
  const [gasto, setGasto] = useState<Gasto>({
    nombre: '',
    cantidad: 0,
  });

  const { nombre, cantidad } = gasto;

  const [error, setError] = useState<boolean>(false);


  const guardarForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setGasto((gasto) => ({
      ...gasto,
      [name]: value,
    }));
  }

  //Cuando envia el form 
  const agregarGasto = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    //validar el formulario
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 3000);

      return;
    }

    //construir el gasto con id
    const gastoId = {
      ...gasto,
      id: shortid.generate()
    }

    //pasar el gasto al componente principal
    setGastoApp(gastoId);
    setcrearGasto(true);

    //resetear el form
    setGasto({
      cantidad: 0,
      nombre: '',
    })
  }



  return (
    <>
      <form onSubmit={agregarGasto} >
        <h3 className="text-center">Agregar Tus <span>Gastos</span> aqui</h3>

        {
          error && <ErrorMsj mensaje={<span>Campos <span className="fw-bold">NO</span> Válidos</span>} />
        }

        <div>
          <label className="form-label fw-semibold" htmlFor="gasto">Nombre Gasto</label>
          <input onChange={guardarForm} value={nombre} name="nombre" className="form-control mb-2" id="gasto" type="text" placeholder="Ej.Transporte" />
        </div>

        <div>
          <label className="form-label fw-semibold mt-3" htmlFor="cantidad">Cantidad Gasto</label>
          <input onChange={guardarForm} value={cantidad} name="cantidad" className="form-control mb-2" id="cantidad" type="number" placeholder="Ej.506" />
        </div>

        <button className="btn btn-dark float-md-none" type="submit">Agregar Gasto</button>
      </form>
    </>
  )
}
