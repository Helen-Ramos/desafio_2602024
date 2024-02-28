import React, { useState } from "react";
import Imagem from "../../assets/simpson.png"


function desafio(){

    return(
        <main>
        <h1>Que difícil esse React</h1>
        <h2>Quando o meu código não roda, mas o prazo chegou ao fim. </h2>
        <img src={Imagem} alt="meme Simpson" />
        </main>
    )
}

export default desafio
