import useLoginForm  from "../hooks/useLoginForm";
import Nav from "../components/nav";

const  Home = () => {
    const { handleLogOut } = useLoginForm({})
    return (
        <div>
            <Nav/>
            Has iniciado sesión
            <button onClick={ handleLogOut }>Cerrar seisión</button>
        </div>
    );
}
export default Home;