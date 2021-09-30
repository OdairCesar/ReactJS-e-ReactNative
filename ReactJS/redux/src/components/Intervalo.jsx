import React from "react"
import { connect } from "react-redux"

import "./Intervalo.css"

import { alterarNumeroMinimo, alterarNumeroMaximo } from "../store/actions/numeros"
import Card from "./Card"

function Intervalo(props) {
  const {min, max, setMin, setMax} = props

  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínino:</strong>
          <input 
            type="number"
            value={min}
            onChange={e => setMin(parseInt(e.target.value))}/>
        </span>
        <span>
          <strong>Máximo:</strong>
          <input 
            type="number" 
            value={max}
            onChange={e => setMax(parseInt(e.target.value))}/>
        </span>
      </div>
    </Card>
  )
}

function mapStateToProps(state){
  return{
    min: state.numeros.min,
    max: state.numeros.max
  }
}

function mapDispatchToProp(dispatch) {
  return {
    setMin(novoNumero) {
      // action creator -> action
      const action = alterarNumeroMinimo(novoNumero);
      dispatch(action);
    },
    setMax(novoNumero) {
      // action creator -> action
      const action = alterarNumeroMaximo(novoNumero);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProp)(Intervalo)