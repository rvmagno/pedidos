import ClienteDB from './ClienteDB'

export default interface ClienteRepository {
    getAll() : Promise<ClienteDB[]>
    save(cliente: ClienteDB) : ClienteDB
}