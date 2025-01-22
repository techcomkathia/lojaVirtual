//crie o componente card produto, com base no componente pronto do bootstrap 5 . Ele deverá mostrar as seguintes informações:
// - Imagem do produto
// - Nome do produto
// - Descrição
// - Preço do produto
// - Botão de comprar (comprar)

//essas informações deverão ser recebidas como props


function CardProduto({titulo, descricao, preco, imagem}){

    return(

        <div className="card" style={{width: "18rem;"}}>
        <img src={imagem} className="card-img-top" alt={titulo} />
        <div className="card-body">
            <h5 className="card-title">{titulo}</h5>
            <p className="card-text">{descricao}.</p>
            <p className="card-text">{preco}</p>
            <a href="#" className="btn btn-primary">Comprar agora</a>
        </div>
        </div>

    )
}

export default CardProduto