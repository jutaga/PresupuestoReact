export const Pregunta = () => {
    return (
        <>
            <h3 className="fw-bold text-center">
                Escribe tu presupuesto
                <i className="bi bi-currency-dollar"></i>
            </h3>

            <form >
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Escribe Presupuesto</label>
                </div>
                <button className="btn btn-dark w-100"><i className="bi bi-cash-stack"></i> Definir Presupuesto</button>
            </form>
        </>
    )
}
