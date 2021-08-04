import React from 'react'
import produtos from '../../data/produto'
import './ListaProdutos.css'

export default function ListaProduto(props){
    // eslint-disable-next-line no-extend-native
    String.prototype.capitalize = function(){
        return this.charAt(0).toUpperCase() + this.substr(1)
    }

    const list = produtos.map((produto, i)=>{
        return (
            <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                <td style={{padding: 10}}>{produto.produto.capitalize()}</td> <td>R$ {produto.preco}</td>
            </tr>
        )
    })

    return(
        <div className='desafioRepeticao'>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
            </table>
        </div>
    )
}