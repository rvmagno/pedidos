
export default class ClienteDB{

    #_id:string
    #nome: string
    #contato: string
    #email: string

    constructor(_id: string, nome: string, contato: string, email: string){
        this.#_id = _id
        this.#nome = nome
        this.#contato = contato
        this.#email = email
    }
    static vazio(){
        return new ClienteDB('', '', '', '')
    }

    get _id(){
        return this.#_id
    }

    get nome(){
        return this.#nome
    }

    get contato(){
        return this.#contato
    }

    get email(){
        return this.#email
    }
}