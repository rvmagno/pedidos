import React from "react"

import Grid from '../template/grid'

import IconButton from '../template/iconButton'

import PageHeader from '../template/pageHeader'

import { add } from './clienteActions'


export default props => {
    return (
        <div role="form">
            <PageHeader name='Cliente' small='contato'></PageHeader>
  
            <div>

                <Grid cols="10 9 10">
                    <label htmlFor="nome">nome:</label>
                    <input id="nome" type="text" /> <br />
                </Grid>
                <Grid cols="10 9 10">
                    <label htmlFor="contato">contato:</label>
                    <input id="contato" type="number" /> <br />
                </Grid>
                <Grid cols="10 9 10">
                    <label htmlFor="email">email:</label>
                    <input id="email" type="text" />
                </Grid>
            </div>
            <div>
                <IconButton icon="plus" onClick={add(nome, contato, email)}></IconButton>
            </div>

            
        </div>
    )
}