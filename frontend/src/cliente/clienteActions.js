import axios from "axios"


const URL = 'http://localhost:3003/api/cliente'

export const changeNome = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
  })
  

export const add = (nome, contato, email) => {
    console.log(`Add cliente ${nome}, ${contato}, ${email} `)
    return dispatch => {
        axios.post(URL, { nome, contato, email })
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()) )
    }
}


export const search = () => {
    return (dispatch, getState) => {
        const nome = getState().cliente.nome
        const search = nome ? `&nome__regex=/${nome}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({type: 'CLIENTE_SEARCHED', payload: resp.data}))
    }
}


export const clear = () => {
    return [{ type: 'CLIENTE_CLEAR' }, search()]
}