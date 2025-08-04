import { useState, useEffect } from "react";
import baseDados from "./baseProduto";
import { useParams } from "react-router-dom";

function ListarProduto() {
    const [produto, setProduto] = useState(null); 
    const { id } = useParams();
    const codigo = Number(id);

useEffect(() => {
    console.log("Código recebido pela URL:", codigo);
    const encontrado = baseDados.find((item) => item.codigo === codigo);
    console.log("Produto encontrado:", encontrado);
    setProduto(encontrado);
}, [codigo]);

    return (
    <div>
        <h1>Detalhes do Produto</h1>
        {produto ? (
    <div className="detalhesProduto">
        <p><strong>Código:</strong> {produto.codigo}</p>
        <p><strong>Nome:</strong> {produto.nomeProduto}</p>
        <p><strong>Descrição:</strong> {produto.descricao}</p>
        <p><strong>Preço:</strong> R$ {produto.preco.toFixed(2)}</p>
        <p><strong>Estoque:</strong> {produto.quantidadeEstoque}</p>
    </div>
) : (
    <p>Nenhum produto encontrado com o código informado.</p>
)}

    </div>
);

}

export default ListarProduto;
