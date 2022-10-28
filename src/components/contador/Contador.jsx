
import React from "react"
import { useContador } from "../../hooks/useContador"
import './Contador.css';


export const Contador =({data}) => {
    return (<div className="contador-container"><h1>{data}</h1></div>)
}