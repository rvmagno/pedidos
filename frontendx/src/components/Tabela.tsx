import ClienteDB from "@/app/core/ClienteDB"
import React from "react"
import { IconeEdicao } from "./Icones"

interface TabelaClientes{
    clientes: ClienteDB[]
    clienteSelecionado?: (cliente: ClienteDB) => void
}

export default function Tabela(props: TabelaClientes){

    function renderHeader(){
        return (
            <tr className="m-5">
                <th>Nome</th>
                <th>Contato</th>
                <th>Email</th>
                <th className="flex justify-center">Ações</th>
            </tr>
        )
    }

    function renderContent(){
        console.log('props.clientes')
        console.log(props.clientes)
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente._id} className={`${i %2 === 0 ? 'bg-blue-100' : 'bg-blue-200' }`}>
                    <td className="p-5 text-black text-left">{cliente.nome}</td>
                    <td className="p-5 text-black text-left">{cliente.contato}</td>
                    <td className="p-5 text-black text-left">{cliente.email}</td>
                    {renderActions(cliente)}
                </tr>
            )
        })
        
    }

    function renderActions(cliente: ClienteDB){
        return (
            <td className="flex justify-center">
                {props.clienteSelecionado ? (

                    <button onClick={() => props.clienteSelecionado?.(cliente)}
                    className={`
                    flex justify-center items-center
                    text-green-500 rounded-full p-2 m-1
                    hover:bg-green-50 
                    `}>
                        {IconeEdicao}
                    </button>

                ) : 
                <span>Cliente Inativo</span> }
            </td>
        )
    }

    return (
        <table className={`w-full overflow-hidden rounded-md`}>
            <thead className={`
            text-gray-100
              bg-gradient-to-r from from-blue-500 to-blue-800 
            `}>

            {renderHeader()}
            </thead>
            <tbody>
                {renderContent()}
            </tbody>

        </table>

    )
}