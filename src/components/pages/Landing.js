import React from "react"
import people from '../../people.svg'

export default function Landing(props) {
    return(
        <div id="landing">
          <div id="circle"></div>
            <div className="left">
              <h1><strong>EcoMed: </strong>Projeto de coleta e conscientização de medicamentos vencidos</h1>
              <p className="default">Não jogue medicamentos veterinários no lixo comum! Proteja o meio ambiente e a saúde humana. Junte-se a nós e saiba como fazer o descarte consciente.</p>
                <a href="#local"><button>Onde descartar</button></a>
            </div>
            <img src={people}></img>
        </div>
    )
}