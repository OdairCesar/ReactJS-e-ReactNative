import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import SectionTitle from '../../components/layout/SectionTitle'
import { initialState, reducer } from '../../store'
import { number_add2, login } from '../../store/actions'

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                <span className="text">{state.number}</span>
            </div>

            <SectionTitle title='Exercicio #01'/>
            <div className="center">
                {state.user? <span className="text">{state.user.name}</span> : <span className="text">Sem usuário</span>}
                <div>
                    <button
                        className='btn'
                        onClick={()=> number_add2(dispatch)}
                        >
                        +2
                    </button>
                    <button
                        className='btn'
                        onClick={()=> login(dispatch, 'Maria')}
                        >
                        Login
                    </button>
                </div>
            </div>

            <SectionTitle title='Desafio useReducer'/>
            <div className="center">
                <span className="text"></span>
                <div>
                    <button 
                        className="btn"
                        onClick={() => number_add2(dispatch)}
                        >
                        x7
                    </button>
                    <button 
                        className="btn"
                        onClick={() => dispatch({type: 'number_div25'})}
                        >
                        :25
                    </button>
                    <button 
                        className="btn"
                        onClick={() => dispatch({type: 'number_parseInt'})}
                        >
                        Inteiro
                    </button>
                    <button 
                        className="btn"
                        onClick={() => dispatch({type: 'number_addNum', payload: 7})}
                        >
                        +7
                    </button>
                </div>
            </div>

        </div>
    )
}

export default UseReducer
