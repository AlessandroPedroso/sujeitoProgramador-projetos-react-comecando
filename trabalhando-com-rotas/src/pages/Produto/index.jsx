import {useParams} from 'react-router-dom'

export default function Produto() {

    const { id } = useParams();

    return (
        <div>
            <h2>PAGINA DETALHE DO PRODUTO</h2>
            <span>
                MEU PRODUTO É {id}
            </span>
        </div>
    )
}