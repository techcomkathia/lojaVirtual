import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'
import ListaProdutos from './componentes/ListaProdutos'
import { array } from 'prop-types'
import CardProduto from './componentes/CardProduto'

function App() {
  //1ª renderize a lista de produtos contendo 3 produtos
  // - variável de estado para armazenar os produtos
  // - função para atualizar a variável de estado
  // useState()

    //2ª renderize a lista de produtos passando ela como propriedade para o componente ListaProdutos

  /* [
      {
        id: 1,
        titulo: "Produto 1",
        descricao: "Descricao do produto 1",
        preco: "R$ 10,00",
        imagem: "data:image/webp;base64,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"
      },
      {
        id: 2,
        titulo: "Produto 2",
        descricao: "Descricao do produto 2",
        preco: "R$ 20,00",
        imagem: "data:image/webp;base64,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"
      },
      {
        id: 3,
        titulo: "Produto 3",
        descricao: "Descricao do produto 3",
        preco: "R$ 30,00",
        imagem: "data:image/webp;base64,UklGRvAIAABXRUJQVlA4IOQIAADQJgCdASqFAIUAPkkijUSioiETLn1IKASEtIALbC6a41/bmaxir6dv7T0E+nH7Tyk7wff3/VeoF7K8yrtL21+nf4L0AvVz6j/kfuf9Cj/U9A/rD7AH5j+sP+t8EX6r/t/YC/l3909V3+3/Zrz4/UnsGfrx1wfRVLGNWi3ENfGrRbXaB8Uulwds6a9xxmTDBFltKDL/z2A/vX/3gcin5ELskHy+rUsff2kv2mi+SULwpKYJvc90cPkCR9Pj6obwU/h2jNurgUxIuMPEgbeVXeShxdhPZWhF91Rcnj5qFEbSAKmVGaDgKN8/SFg+PbDcICp2oJoyLC3lInVatE3gvD2NRmv2A0GvaRdQabq2P/vzLTm6o2XWVA/USYx76+Ur3v5aptOw7Xoc3hpYEWeiMCQYF3ENfGrRbiGvjVotxB4AAP791oAAm3RPfV2d8M/7R6k4kx6B9jxAWg9sdeWDWH1lder7RXj6FiyPQBojH+moYzsi4c/jt72uEapf/ijcdnYnoF9ImdQXKtEATu+xkprhCwEGkxTE0IixSf4T409grVTwdGec7XtozB3Qehvq6UuWT8ZuOGMMtr/5zmR3PU3+DCJ/c8vCLrTIjydnhI9SwOUcfYZ/aARv+r1CbzSojRItyJ9Q+dKuf9NuYtKsGa0iSBB7u1V+2m/7MO+6XsS2Y2xnrke6dY5A+0MAGvlEO18c0XWfH42g2k/xTLaX8luuZmjbNLvoKpS0mGKSLO3XtII+7WLgw0vze69yfWDno2xZwWDlq1AvBlHxfV7FCHn0Q5ZP/VkJCvVb+xRn7X78wfLaBX0pwnzD+vxn38LljZ3A0Z1Hu0AXYM+PQEy52mzqVz9q6sUddypso59yo8YZrp/ruq38BgL7CQQP1Gsyyk+XYZ+rNelyjW7PEDJGARckfZUMJEmrA4SXJhfl1R+cVkH+vI/C0zPFCN1sQVUmwvxG8QqHqQcBY+XDwGxTL85Ofp5xK+r019FklLlCV0e5HF1bW0yPkqEG6F6e6TPnSisrlK1pL0a0WrP9KAoz1Vt9v2VZ19qlaVo93IDkC8HDjWDRu9jAC/A/vgUx9g0VG5PbKt7e60/if0mRWQA6uuqzDCc8DyQ4ghQ2AmA0LRpLjORw8JwtADnrk9DH1M5Dn9iNYrTofAS3FORYwOYIXI6RBXMyLAiP+nD1RK846MBV7WkpHAjVyXhnPDiGyUI+lxvaj2iNrsPxFNgin6fWJ6STkd2txuRIUxZfXjdn2d4CMVo9J4sxsS80Bd/V3XvDr12skB6dYrYos6/j/HtmvUoQ7uGGUklgBOLoqUKHqp6DObquZFre7Y5uz9w9v6OPNMbMOdICJtxAAM3oH/4+DGQcEuWT8f0Klmdwqc4XQTROp2v++4K9Eq4uiSW6zW+QgJieSTaeK7OZR9mA8kY13Ox5fWlHsbfjrqlWoLxaYxhO1amHYbHatM2BCehEHe7BZiYFVIcaSOGgsv5FkyH0zTda29vKFWmX3MdnQ5x3fusxa18LlEUfocW7ZuzHHa3oAiOLrn9LREOZmNHMfRGy+ecv5AI4p1B8w9rijq29ymOp6BeBBFQp6rnTfJfg3x2Rv9B2nmBsTh9umamKRlRa8ezKO2M4zgWxt5ZNbFR2UGsd7q/OiC98vngNgJQl/lWhhcmhfTR9hO415GljwJBN5qnd3JWMT2lDihOxlhlxk28Ta/ziSFQMi/GzdBQjWtsHomSZuh+3sCc0U9S3gBBxQH2ERfmDzIq7CoPsF/eT5g9q4iWSX+tv6DeVe46Ix38aKMuYD6YSls51Rssad2QD9KSLC3QxbH0OnI8Cqrkhq+kcaUWiNsh3U5OvsuhecaZ94/Tcw325HVeTq02rJHCgtfxJ6uZH0OQfyaUm8U+4zZordml7Ily5jrdBVcxKpAottqFggeaRKAQEVvJjQnMqqQuPo+TWBvPyxFIVaacQuCcSSXTGqgaVJ7nsHFrYrJXW1bkArhKmlLwJSFXSb6W8drUZXmsQIiWOH22M3uy2xQ2S6Oc1k+TA/CSdV3vWgo3FwJ5cESF6PuIBLjicnoDHy4QTj6x5bEC0HEZh0lr0wuPjhTqffC2WinaoLQjxt8x2wEYRX/lz59vGpOSdPhEyLFQIhMNAQJGiV4eHITbcu0l1gmTfbf0X9jUcFAIWJASMheP8Dua7xWCohZJMJC5JVbTHVDS6b5++u1nYRATQ74/OiEKu9q7kdWSqMovbMNnMs26xYJr8U7ETWrIHH4UrTo0L/mvdv8Puow7lNcu55/hsHNC0EdHanXiFH1nOePSH3khhBUhjDuWcodcIlNSTcbybf+5F3zuzqayO4AKqYdavCH0ZnHqiv1GucTU+niIrQ5r5OQx2kmvjmC2vYHg4ySgDtSpdwAsi+F4P68GXByCTQsZJPodIIiKojxfCPwYautlVw0bk8dZ6dNY+VieI6pt2QD6RWxoZVXftHwa/zMUQgzQQsg9/1e09mpjcYtbmmnb8+UDjp34LzRIAfH4s6P7OQ9nzyzYM4VEaW6fsxP2/eDUdK+89XKRcw3jZOSQciUKpbEviRJM4rQLleKRc0/U5pHeZQjT6drjPvYzP6fsI3VjMMsMVqqZfVSnu2JP5w8Sz45G8rUNOOb6856zy1aBqiKLTM4Tbvv2AbOY6vTwIfDw3jBlZHTQwbMV5sbF3a/6nAV+UrxpIHrtwPWS2i9NFLSNXZNs3V5svXMOTnfkjKWu+IUXt67jciaspkLeiLvqPjfRSxy8s5SPUZ7qJz2wig0oeMkVwj3Stf8Bx1UAhFCVm7mEOCFO7inu6qn3BW/KwqHauAn9Khl0wQKczt6wV/5aY0tCz8ArhcEY+Vfn6k7t/yxQMExHCdvOsgyebgKnHxTXY/kt7pVQMcAN/HMet2JHC4h3TJzdEMHf0UoR0txreP5rqI/TiAmc8r4yZyYf861XBOOEqz8KCDPOzaqlBSnuQo8MjVifehyprb3lHjEOh+P1qUp47FPMPQP6CixXT6Ixz0hvmQKV8ZQm2RbQAAAAAAA=="}
      ]*/
  
        const [produtos, setProdutos] = useState([])
        const [produtoBusca, setProdutoBusca] = useState({})
        const [id, setId] = useState(1)


  // 3º usando o hook useEffect faça um get na API fake store api, trazendo TODOS os produtos e armazene na variável produtos

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(resp => resp.json())
    .then(arrayDeProdutos => setProdutos(arrayDeProdutos))
    .then(console.log(produtos))
    .catch(erro => console.log(erro.message))
  }, []) 


  // 4º usando o hook useEffect faça um get na API fake store api, trazendo o produto pelo id e armazene na variável produtoBusca
  useEffect(()=>{
    //https://fakestoreapi.com/products/{id}
  } , [id])
 
  
  // primeiro parâmetro: função, segundo parâmetro: array de dependências


  return (
    <>
      
      <h1>Aula 21</h1>

      <ListaProdutos produtos={produtos} />


      <h1>Pesquisar Produto</h1>

      

      <CardProduto titulo={busca.title} descricao={busca.description} preco={busca.price} imagem={busca.image}/>
      
    </>
  )
}

export default App
