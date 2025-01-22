import CardProduto from "./CardProduto";


function ListaProdutos({produtos}){

    return(
        <div>
            {
                produtos.map((item)=>{
                    return(
                        <CardProduto 
                            key={item.id} 
                            titulo={item.titulo} 
                            descricao={item.descricao} 
                            preco={item.preco} 
                            imagem={item.imagem}
                        />
                    )
                })
            }
        </div>
    )
}

export default ListaProdutos