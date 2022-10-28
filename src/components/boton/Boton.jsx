import React from "react"
import { useContador } from "../../hooks/useContador"
import { Contador } from "../contador/Contador"


export const Boton= () => {
    const {Aumentar,Disminuir,Reset,data} = useContador()
    return (
        <div>
            <Contador data={data}/>
            <button onClick={()=>Disminuir()}>Disminuir</button>
            <button onClick={()=>Reset()}>Reset</button>
            <button onClick={()=>Aumentar()}>Aumentar</button>
        </div>
    )
}