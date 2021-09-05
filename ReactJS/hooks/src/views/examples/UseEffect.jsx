import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(n){
    const num = parseInt(n)
    if (num < 0) return -1
    if (num === 0) return 1
    return calcFatorial(num -1) * num
}

function verificarPar(n){
    if(n % 2 === 0) return true
    return false
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [ePar, setEPar] = useState(false)

    useEffect(function(){
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function(){
        setEPar(verificarPar(number))
    }, [number])

    useEffect(function() {
        if(fatorial > 1000000) {
            document.title = "Eita!!!"
        }
    }, [fatorial])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title='Exercicio #01' />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1? 'Não existe': fatorial}</span>
                </div>
                <input 
                    className='input' 
                    type="number"
                    value={number}
                    onChange={e => setNumber(e.target.value)} 
                    />
            </div>

            <SectionTitle title='Desafio Effect' />
            <div className='center'>
                <div>
                    <span className="text">O numero {number} é </span>
                    <span className="text red">{ePar? 'Par' : 'Impar'}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
