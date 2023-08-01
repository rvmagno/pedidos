
import ClienteDB from "./ClienteDB";
import ClienteRepository from "./ClienteRepository"

import { v4 as uuidv4} from "uuid"

import axios from "axios";

export default class ClienteDBRepository implements ClienteRepository {

    clientes: ClienteDB[] = [];

    baseUrl  = 'http://localhost:3003/api/cliente'

    async getAll(): Promise<ClienteDB[]> {
        
        const resposta = await axios.get(this.baseUrl)
        console.log(resposta.data)

        return resposta.data.map((_cli: any) => {
            return new ClienteDB(_cli._id, _cli.nome, _cli.contato, _cli.email)
        }) ?? ClienteDB.vazio()
    }

    save(cliente: ClienteDB): ClienteDB {
        return new ClienteDB(uuidv4(), 'vazio', '', '')
    }
    
}