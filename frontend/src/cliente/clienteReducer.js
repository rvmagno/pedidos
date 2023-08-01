const INITIAL_STATE = { nome: '', contato: 0, email: ''}

export default(state = INITIAL_STATE, action ) => {
    console.log(`Cliente Action ${action.payload}`)

    switch(action.type){
        
        case 'CLIENTE_SEARCHED':
            return { ... state, list: action.payload}
        case 'CLIENTE_CLEAR':
            return { ... state, nome: '' }
        default:
            return state
    }
}