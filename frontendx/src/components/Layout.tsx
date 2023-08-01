import Link from "next/link"

import React from "react"

import '../styles/globals.css'

interface LayoutProps{
    children: any
}

export default function Layout(props: LayoutProps){

    return (
        <div className={`
            flex h-screen justify-center 
            bg-blue-50
        `}>

            <div className={`
                flex flex-col w-3/4 p-5
                bg-gray-200
            `}>
                <div className={`
                space-x-3 space-y-3 p-5
                text-red-500
                `}>
                    <Link href="/" >Home</Link>
                    <Link href="/cliente">Cliente</Link>
                    <Link href="/produto">Produto</Link>
                    <Link href="/orcamento">Orcamento</Link>
                </div>
                <hr></hr>
                <div >
                    {props.children}
                </div>
            </div>
        </div>
       
    )
}