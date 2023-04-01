import { Gasto } from "../interfaces/Gasto.interface"
import { GastoIndividual } from "./GastoIndividual";

interface Props {
    gastos: Gasto[];
}

export const Listado = ({ gastos }: Props) => {
    return (
        <div>

            <h2 className="text-center ">Gastos Realizados <i className="bi bi-cash"></i></h2>
            {gastos.map((gasto) => (
                <GastoIndividual key={gasto.id} gasto={gasto} />
            ))}

        </div>
    )
}
