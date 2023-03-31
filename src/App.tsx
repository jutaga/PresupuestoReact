import { Pregunta } from "./components/Pregunta"

export const App = () => {
  return (
    <div className="container">
      <header>
        <h1 className="m-5 text-center fs-1 fw-bolder">
          <i className="bi bi-bag-fill"></i> Gasto Semanal</h1>

        <div className="bg-light p-5 border-dark rounded-3">
          <Pregunta />
        </div>

      </header>
    </div>
  )
}
