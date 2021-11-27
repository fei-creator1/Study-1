import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app'

ReactDOM.render(
  <React.StrictMode>
    <App id={0} str={'1'} aaaaaaaaaaaaa={undefined} b={undefined} />
  </React.StrictMode>,
  document.getElementById('root')
)

if (module && module.hot) {
  module.hot.accept()
}
