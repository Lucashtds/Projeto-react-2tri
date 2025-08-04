import './estilo.css'

function Card(props){
    
    return (
        <div className='card'>
           <img src={props.fotoPerfil}/>
            <div>
                <h1>{props.nome}</h1>
                <p>{props.biografia}</p>
            </div>
        </div>
    )
}

export default Card;