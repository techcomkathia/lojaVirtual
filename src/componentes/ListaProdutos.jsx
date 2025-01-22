import CardProduto from "./CardProduto";
//[{},{},{}]

function ListaProdutos({produtos}){

    return(
        <div>
            {
                produtos.map((item)=>{
                    return(
                        <CardProduto 
                            key={item.id} 
                            titulo={item.title} 
                            descricao={item.description} 
                            preco={item.price} 
                            imagem={item.image}
                        />
                    )
                })
            }
        </div>
    )
}

export default ListaProdutos