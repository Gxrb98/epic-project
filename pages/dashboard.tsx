import { useRouter } from "next/router";
import { useAuth } from "../hooks/useAuth";

function Dashboard() {

    const { saveToken } = useAuth()
    return (
        <div>
            Has iniciado sesión
            <button onClick={ () => saveToken('')}>Cerrar seisión</button>
        </div>
    );
}

export default Dashboard;