import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader' /* react-hot-loader v3 */
import Examples from './Examples/Examples'

const render = () => {
  ReactDOM.render(
    <AppContainer warnings={false}>
      <Examples />
    </AppContainer>,
    document.getElementById('examples')
  )
}

render()

if (module.hot) {
  module.hot.accept('./Examples/Examples', () => {
    render()
  })
}
