import React, { useEffect } from "react";
import { useParams } from "react-router-dom";



function Detalhes(){

const parametros = useParams();
console.log(parametros.id)


    return(
        <div>
Detalhes
        </div>
    )
}





export default Detalhes;