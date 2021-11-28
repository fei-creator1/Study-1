import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import App from './app'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

if (module && module.hot) {
  module.hot.accept()
}
