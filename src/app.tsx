import React from 'react'
import style from './App.scss'
import { Button } from 'antd'
import 'antd/dist/antd.css'
const App: React.FC<any> = () => {
  return (
    <>
      <div className={style.app}>Hello World!!!</div>
      <Button type="primary">666</Button>
    </>
  )
}

export default App
