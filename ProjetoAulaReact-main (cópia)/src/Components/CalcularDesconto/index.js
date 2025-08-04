import './estilo.css';

function CalcularDesconto({ valorCompra, porcentagem, pagamento }) {
    console.log("Valor Compra: " + valorCompra)
    console.log("Desconto: " + porcentagem)
    console.log("Tipo Pagamento: " + pagamento)

    let valorVenda = 0.0;
    //a vista
    if (pagamento == 1) {
        valorVenda = valorCompra - (valorCompra * (porcentagem / 100))
    }

    //a prazo
    if (pagamento == 2) {
        valorVenda = valorCompra + (valorCompra * (porcentagem / 100))
    }
    console.log(valorVenda)

    return (
        <div className="calculadoraDesconto">
            <h1>Calculadora Financeira</h1>
            <h2>Valor Compra: R$ {valorCompra}</h2>
            <p>Forma de pagamento: {pagamento == 1 ? "A vista" : "A prazo"}</p>
            <h2>Valor de Venda: R$ {valorVenda}</h2>
        </div>
    )
}

export default CalcularDesconto;