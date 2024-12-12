import { Link } from "react-router-dom";

export default function Contato() {
    return (
        <div>
            <h1>Pagina de Contato</h1>
            <span>Contato da empresa (dd) xxxx-xxxx</span><br /><br />
            <Link to='/Sobre'>Sobre</Link><br/>
            <Link to='/'>Home</Link>
        </div>
    )
}