type ErrorMsjProps = {
    mensaje: React.ReactNode
};

export const ErrorMsj = ({ mensaje }: ErrorMsjProps) => {
    return (
        <div className="alert alert-primary">
            {mensaje}
        </div>
    )
}
