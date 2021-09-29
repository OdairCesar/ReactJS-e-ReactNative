import React from "react"

import "./Intervalo.css"
import Card from "./Card"

export default function Intervalo(props) {
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
