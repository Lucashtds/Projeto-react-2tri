import { useState } from "react"; 
function Home(){
//hooks
const [titulo, setTitulo] = useState('Página Inicial do site - 2025');
const [descricao, setDescricao] = useState('Descrição da página Home - 2025!!!')
const [ativo, setAtivo] = useState(false)

// condição ? lado verdadeiro : lado falso
// ativo ? mostra as variáveis : mostra o texto
    return(
        <div>
            { 
            ativo ? 
                <div>
                    <h2>{titulo}</h2>
                    <p>{descricao}</p>
                </div>
            : 
            <div>
                <h2>Outra coisa</h2>
                <p>Outra coisa</p>
            </div>
            }
        </div>
    )
}
export default Home;