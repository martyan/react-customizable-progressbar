import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader' /* react-hot-loader v3 */
import Examples from './Examples'

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Examples />
        </AppContainer>,
        document.getElementById('app')
    )
}

render()

if(module.hot) {
    module.hot.accept('./Examples', () => {
        render()
    })
}
