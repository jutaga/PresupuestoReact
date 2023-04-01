import { useState } from "react"


export const Formulario = () => {


  return (
    <>
      <form >
        <h3 className="text-center">Agregar Tus <span>Gastos</span> aqui</h3>

        <div>
          <label className="form-label fw-semibold" htmlFor="gasto">Nombre Gasto</label>
          <input className="form-control mb-2" id="gasto" type="text" placeholder="Ej.Transporte" />
        </div>

        <div>
          <label className="form-label fw-semibold" htmlFor="cantidad">Cantidad Gasto</label>
          <input className="form-control mb-2" id="cantidad" type="number" placeholder="Ej.506" />
        </div>

        <button className="btn btn-dark float-md-none" type="submit">Agregar Gasto</button>
      </form>
    </>
  )
}
