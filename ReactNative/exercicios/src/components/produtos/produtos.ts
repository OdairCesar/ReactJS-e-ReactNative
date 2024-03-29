interface Produto {
  id: number,
  nome: string,
  preco: number
}

const Produtos: Array<Produto> = [
  { id: 1, nome: 'Last Of Us 2', preco: 149.99 },
  { id: 2, nome: 'Caderno', preco: 19.99 },
  { id: 3, nome: 'PlayStation 5', preco: 2599.99 },
  { id: 4, nome: 'Macbook', preco: 9879.99 },
  { id: 5, nome: 'Caneta', preco: 4.99 },
]

export default Produtos