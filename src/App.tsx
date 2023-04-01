import { useState, useEffect } from "react"
import { Pregunta } from "./components/Pregunta"
import { Formulario } from "./components/Formulario";
import { Gasto } from "./interfaces/Gasto.interface";
import { Listado } from "./components/Listado";
import { ControlPresupuesto } from "./components/ControlPresupuesto";
export const App = () => {

  const [presupuesto, setPresupuesto] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [mostrarPregunta, setMostrarPregunta] = useState<boolean>(true);
  const [gastos, setGastos] = useState<Gasto[]>([]);
  const [gastoApp, setGastoApp] = useState<Gasto>({
    cantidad: 0,
    nombre: '',
    id: '',
  });

  const [crearGasto, setcrearGasto] = useState<boolean>(false);

  //Actualiza el restando
  useEffect(() => {

    if (crearGasto) {
      //Agrega el nuevo Presupuesto
      setGastos([
        ...gastos,
        gastoApp
      ]);

      const presupuestoRestante = total - gastoApp.cantidad;
      setTotal(presupuestoRestante);

      //Resta del presupuesto actuak
      setcrearGasto(false);

    }

  }, [gastoApp])




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
                  <Formulario setcrearGasto={setcrearGasto} setGastoApp={setGastoApp} />
                </div>
                <div className="col-md-6">
                  <Listado total={total} setTotal={setTotal} gastos={gastos} setGastos={setGastos} />
                  <ControlPresupuesto  total={total} presupuesto={presupuesto} />
                </div>
              </div>
          }
        </div>
      </header>
    </div>
  )
}
