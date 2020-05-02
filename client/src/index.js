import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import 'materialize-css/dist/css/materialize.min.css'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import { stratGetBanks } from './actions/banksAction'

const store = configureStore()

console.log(store.getState())

store.dispatch(stratGetBanks())
const jsx = <Provider store = {store}>
    <App />
</Provider>

ReactDom.render(jsx, document.getElementById('root'))