import { Link } from "react-router-dom";

export default function Erro() {
    return (
        <div>
            <h2>Ops parece que essa pagina não existe!</h2>
            
            <span>Encontramos essas paginas</span><br />
            <Link to="/">Home</Link><br />
            <Link to="/sobre">Sobre</Link><br />
            <Link to="/contato">Contato</Link>
        </div>
    )
}