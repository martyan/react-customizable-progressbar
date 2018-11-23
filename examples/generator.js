import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader' /* react-hot-loader v3 */
import Generator from './Generator/Generator'

const render = () => {
  ReactDOM.render(
    <AppContainer warnings={false}>
      <Generator />
    </AppContainer>,
    document.getElementById('generator')
  )
}

render()

if (module.hot) {
  module.hot.accept('./Generator/Generator', () => {
    render()
  })
}
