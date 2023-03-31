import { useState } from "react"
import { ErrorMsj } from "./ErrorMsj";

export const Pregunta = () => {

    const [cantidad, setCantidad] = useState<number>(0);
    const [error, setError] = useState<boolean>(false);

    const handlePresupuesto = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCantidad(parseInt(e.target.value));
    }

    //submit para definit presupuesto

    const submitPresupuesto = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        // Validar el input
        if (cantidad < 1 || isNaN(cantidad)) {
            setError(true);

            setTimeout(() => {
                setError(false);
            }, 3000);
            return;
        }

        //Accion cuando cumple la validacion
        setError(false);
    }


    return (
        <>
            <h2 className="fw-bold text-center">
                Escribe tu presupuesto
                <i className="bi bi-currency-dollar"></i>
            </h2>
            {
                error ? <ErrorMsj mensaje={<span>Presupuesto <span className="fw-bold">NO</span> Válido</span>} />
                    : null
            }
            <form onSubmit={submitPresupuesto} >
                <div className="form-floating mb-3">
                    <input min={0} onChange={handlePresupuesto} type="number" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Escribe Presupuesto</label>
                </div>
                <button type="submit" className="btn btn-dark w-100"><i className="bi bi-cash-stack"></i> Definir Presupuesto</button>
            </form>

        </>
    )
}
