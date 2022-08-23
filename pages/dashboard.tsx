import { useRouter } from "next/router";
import useLoginForm  from "../hooks/useLoginForm";
import axios from "axios";
import { useEffect } from 'react'

const  Dashboard = () => {

    const { handleLogOut } = useLoginForm({})
    return (
        <div>
            Has iniciado sesión
            <button onClick={ handleLogOut }>Cerrar seisión</button>
        </div>
    );
}

export default Dashboard;