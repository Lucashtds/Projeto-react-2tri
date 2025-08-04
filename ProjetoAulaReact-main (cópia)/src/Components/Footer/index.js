import './index.css'
import { Link } from 'react-router-dom'

export default function Footer(){
    return(
        <footer>
            <ul className='menu'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/produtos">Produtos</Link></li>
                <li><Link to="/contato">Contato</Link></li>
                <li><Link to="/calcularDesconto">CalcularDesconto</Link></li>
            </ul>
            <p>Desenvolvido por: LUCAS HENRIQUE - 
                Todos os direitos reservados.</p>
        </footer>
    )
}