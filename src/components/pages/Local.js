export default function Local(props) {
    return(
        <div id="local">
            <h4>
                Descarte seus medicamentos em nosso centro de coleta na <strong>Universidade São Judas Unimonte.</strong>
            </h4>
            <div className="box">
                <div className="location">
                <h4>Endereço</h4>
                <div className="box">

                <div>
                <div>
                    <label>Rua</label>
                    <p>Rua Comendador Martins, 52</p>
                </div>
                <div>
                    <label>Bairro</label>
                    <p>Vila Matias</p>
                </div>
                </div>
                <div>
                <div>
                    <label>Cidade</label>
                    <p>Santos - SP</p>
                </div>
                <div>
                    <label>CEP</label>
                    <p>11015-530</p>
                </div>
                </div>
                </div>
            </div>
            <div className="map"><div style={{ maxWidth:'100%', overflow: 'hidden', color:'red', width:'100%', height:'100%'}}><div id="embed-ded-map-canvas" style={{ height:'100%', width:'100%', maxWidth:'100%'}}><iframe style={{height:'100%', width:'100%', border:0}} frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=São+Judas+Campus+Unimonte+(CSJT)+-+Rua+Comendador+Martins+-+Vila+Matias,+Santos+-+SP,+Brasil&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div><a class="code-for-google-map" href="https://www.bootstrapskins.com/themes" id="enable-map-info">premium bootstrap themes</a><style></style></div></div>
            </div>
        </div>
    )
}