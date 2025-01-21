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
                            img={item.img}
                        />
                    )
                })
            }
        </div>
    )
}

export default ListaProdutos