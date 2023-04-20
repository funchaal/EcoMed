import React from "react"
import medical from '../../medical.svg'

export default function About(props) {
    return(
        <div id="about">
            <h2>Conheça mais sobre nosso projeto!</h2>
            <div className="box">
            <div className="left">
                <h3>Nosso <strong>objetivo</strong></h3>
                <p className="default">Nosso objetivo é conscientizar a comunidade acadêmica sobre a importância do descarte adequado de medicamentos. Além disso, queremos fornecer um ponto de coleta seguro para que os estudantes possam descartar os medicamentos vencidos ou que não estão mais em uso, evitando a contaminação do meio ambiente e a possibilidade de danos à saúde pública.</p>
            </div>
            <img src={medical} className="medical" style={{ width: '38%' }}></img>
            </div>
        </div>
    )
}