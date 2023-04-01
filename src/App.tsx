import { useState } from "react"
import { Pregunta } from "./components/Pregunta"
import { Formulario } from "./components/Formulario";
import { Gasto } from "./interfaces/Gasto.interface";

export const App = () => {

  const [presupuesto, setPresupuesto] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [mostrarPregunta, setMostrarPregunta] = useState<boolean>(true);
  const [gastos, setGastos] = useState<Gasto[]>([])

  //Agregamos el nuevo gasto
  const agregarGastos = (gasto: Gasto) => {

    setGastos([
      ...gastos,
      gasto
    ]);

    console.log(gastos);
  }


  return (
    <div className="container">
      <header >
        <h1 className="m-5 text-center fs-1 fw-bolder">
          <i className="bi bi-bag-fill"></i> Gasto Semanal</h1>

        <div className="bg-light p-5 border-dark rounded-3" >
          {
            mostrarPregunta
              ?
              <Pregunta setPresupuesto={setPresupuesto} setTotal={setTotal} setMostrarPregunta={setMostrarPregunta} />
              :
              <div className="row">
                <div className="col-md-6">
                  <Formulario agregarGastos={agregarGastos} />
                </div>
                <div className="col-md-6">
                  2
                </div>
              </div>
          }
        </div>
      </header>
    </div>
  )
}
