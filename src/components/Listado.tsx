import { Gasto } from "../interfaces/Gasto.interface"
import { GastoIndividual } from "./GastoIndividual";

interface Props {
    gastos: Gasto[];
    setGastos : React.Dispatch<React.SetStateAction<Gasto[]>>;
    setTotal: React.Dispatch<React.SetStateAction<number>>;
    total: number;
}

export const Listado = ({ gastos, setGastos, setTotal, total}: Props) => {


    const eliminarGasto = (gastoId: string) => {
        const nuevosGastos = gastos.filter((gasto) => gasto.id !== gastoId);
        setGastos(nuevosGastos);
    }

    return (
        <div>

            <h2 className="text-center ">Gastos Realizados <i className="bi bi-cash"></i></h2>
            {gastos.map((gasto) => (
                <GastoIndividual total={total} setTotal={setTotal} eliminarGasto = {eliminarGasto} key={gasto.id} gasto={gasto} />
            ))}

        </div>
    )
}
