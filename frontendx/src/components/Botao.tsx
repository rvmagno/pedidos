

interface BotaoProps{
    className?: string
    children: any
    onClick?: () => void
}

export default function Botao(props: BotaoProps){

    return (
        
        <button  onClick={props.onClick}  className={`
            bg-gradient-to-r from-gray-300 to-gray-400
            text-red-500 px-4 py-2 rounded-md m-4
            ${props.className}
        `}>
            {props.children}
        </button>
    )
} 