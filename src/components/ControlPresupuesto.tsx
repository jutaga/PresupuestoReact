import { revisarPresupuesto } from "../helpers"

export const ControlPresupuesto = ({ total, presupuesto }: any) => {
    return (
        <>
            <div className="alert alert-info">
                Presupuesto: $ {presupuesto}
            </div>

            <div className={`alert ${revisarPresupuesto(presupuesto, total)}`}>
                Restante : $ {total}
            </div>
        </>
    )
}
