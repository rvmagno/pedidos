const INITIAL_STATE = { description: '', list: []}

export default(state = INITIAL_STATE, action ) => {
    console.log(`TODO Action ${action.payload} `  )
    switch(action.type){
        case 'DESCRIPTION_CHANGED':
            return { ... state, description: action.payload}
        case 'TODO_SEARCHED':
            return { ... state, list: action.payload}
        case 'TODO_CLEAR':
            return { ...state, description: '' }
        default:
            return state
    }
}