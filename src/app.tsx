import React, { useEffect } from 'react'
import { Button, Spin } from 'antd'
import 'antd/dist/antd.css'
import axios from 'axios'
import { useRequest } from 'ahooks'
import { Menu } from 'antd'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import A from './a'

const { SubMenu } = Menu
interface Item {
  id: number
  str: string
  aaaaaaaaaaaaa: undefined
  b?: number | string
}

const App: React.FC<Item> = item => {
  const { run, loading, data } = useRequest(axios.get, {
    manual: true,
    formatResult(res: any) {
      console.log(res)
      return res
    },
  })
  console.log(loading, data)

  const arr: number[] = Array(10)
    .fill(0)
    .map((a, i) => i)
  return loading ? (
    <Spin />
  ) : (
    <>
      <A />
      <div>{data?.data?.substr(0, 1000)}</div>
      <Button
        onClick={() => {
          run('/')
        }}
        type="primary"
      >
        点我
      </Button>
      <Menu style={{ width: 256 }} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline">
        <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
          <Menu.ItemGroup key="g1" title="Item 1">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
          {arr.map((a: number) => (
            <Menu.Item key={`a${a}`}>{a}</Menu.Item>
          ))}
        </SubMenu>
      </Menu>
    </>
  )
}

export default App
