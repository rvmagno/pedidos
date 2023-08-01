"use client"
import Cliente from "@/core/Cliente";
import { useState } from "react";
import Botao from "./Botao";
import Entrada from "./Entrada";
import ClienteDB from "@/app/core/ClienteDB";

interface FormularioProps{
    cliente?: ClienteDB
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps){
    
    const [nome, setNome] = useState(props.cliente?.nome ?? "")
    const [contato, setContato] = useState(props.cliente?.contato ?? 0)
    const [email, setEmail] = useState(props.cliente?.email ?? '')

    return (
        <div className="flex flex-col">
           <div className="flex flex-col justify-around w-1/4" >
                <Entrada texto="nome" valor={nome} valorMudou={setNome} ></Entrada>
                <Entrada texto="contato" valor={contato} tipo="number" valorMudou={setContato}></Entrada>
                <Entrada texto="email" valor={email} valorMudou={setEmail}></Entrada>
                
            </div>
            <div className="flex justify-start m-2">
                <Botao >add</Botao>
                {/* <button onClick={() => add(nome, contato, email)}>Add</button> */}
            </div>

        </div>
    )
}