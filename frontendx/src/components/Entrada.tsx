"use client"
interface EntradaProps{
    tipo?: 'text' | 'number'
    texto: string
    valor: any
    somenteLeitura?: boolean
    className?: string
    valorMudou?: (valor: any) => void
}

export default function Entrada(props: EntradaProps){
    return (
        <div className={`flex flex-col ${props.className}`}>
        {/* ""> */}
            <label className="mb-2 text-gray-700">{props.texto}</label>
            <input 
                type={props.tipo ?? 'text'} name="" id=""
                value={props.valor}
                readOnly={props.somenteLeitura}
                onChange={e => props.valorMudou?.(e.target.value)}
                className={`border border-purple-500 rounded-lg
                focus:outline-none bg-gray-100 text-black
                px-4 py-2 ${props.somenteLeitura ? '': 'focus:bg-white'}`}
                />
        </div>
    )
}