import React from "react"
import people from '../../people.svg'

export default function Home(props) {
    return(
        <div id="home">
          <div id="circle"></div>
            <div className="left">
              <h1><strong style={{ marginBottom: "-45px", display: "block" }}>EcoMed </strong><br></br>Projeto de coleta e conscientização de medicamentos vencidos</h1>
              <p className="default">Não jogue medicamentos veterinários no lixo comum! Proteja o meio ambiente e a saúde humana. Junte-se a nós e saiba como fazer o descarte consciente.</p>
                <div className="home-button-box">
                  <a href="#local"><button>Onde descartar</button></a>
                  <a href="#info"><button>Informações importantes</button></a>
                </div>
            </div>
            <img src={people}></img>
        </div>
    )
}