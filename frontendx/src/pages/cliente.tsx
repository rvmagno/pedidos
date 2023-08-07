import Tabela from "../components/Tabela";
import Layout from "../components/Layout";
import ClienteDB from "../app/core/ClienteDB";

import Formulario from "@/components/Formulario";
import { v4 as uuidv4} from "uuid"
import ClienteDBRepository from "@/app/core/ClienteDBRepository";


export default  function Cliente(){
    function add(nome: string, contato: string, email: string){
        console.log()
    }

    const repository = new ClienteDBRepository()
    const clientes = repository.getAll()
    // [
    //     new ClienteDB(uuidv4(), 'romulo', '11987654', 'romulo@email.com'),
    //     new ClienteDB(uuidv4(), 'renato', '11456789', 'romulo@email.com'),
    //     new ClienteDB(uuidv4(), 'ricardo', '11456789', 'romulo@email.com'),
    //     new ClienteDB(uuidv4(), 'rogerio', '11456789', 'romulo@email.com')
    // ]

    function clienteSelecionado(cliente: ClienteDB){
        console.log(`cliente => ${cliente.nome}`)
    }

    return (
        
        <Layout>
            <Formulario >

            </Formulario>
            <div>
                {/* <Tabela clientes={repository.getAll()} */}
                <Tabela clientes={clientes}
                    clienteSelecionado={clienteSelecionado}>

                </Tabela>
            </div>
        </Layout>
    )
}