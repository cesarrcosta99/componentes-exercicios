import React from "react";

function InfosUsuario() {
    const titulo = "César Costa"

    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
    }

    return (
        <div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=1 " alt="" />
                <h4>{titulo}</h4>
            </div>
        </div>
    )
}

export default InfosUsuario