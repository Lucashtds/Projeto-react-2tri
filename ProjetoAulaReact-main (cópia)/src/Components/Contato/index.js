import { useState } from "react"

export default function Contato(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [comentario, setComentario] = useState('')
    return(
        <div>
            <h1>Formulário de Contato</h1>
            <p>Entre com os dados solicitados abaixo, que em breve estaremos 
                entrando em contato.
            </p>

            <form>

                <label>Nome:</label>
                <input type="text" value={nome} onChange = {(e) => setNome(e.target.value)}/>

                <label>E-mail:</label>
                <input type="text" value = {email} onChange={(e) => setEmail(e.target.value)}/>

                <label>Comentário:</label>
                <textarea value={comentario} onChange={(e) => setComentario(e.target.value)}/>
            </form>
            <p>
                Olá <strong>{nome}</strong>, em breve você receberá 
                um e-mail no endereço <strong>{email}</strong> sobre o seu
                 comentário <strong>{comentario}</strong>
            </p>
        </div>
    )
}

//export default Contato;