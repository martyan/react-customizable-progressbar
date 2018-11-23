import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader' /* react-hot-loader v3 */
import Switch from './Switch'

const render = () => {
  ReactDOM.render(
    <AppContainer warnings={false}>
      <Switch />
    </AppContainer>,
    document.getElementById('app')
  )
}

render()

if (module.hot) {
  module.hot.accept('./Switch', () => {
    render()
  })
}
