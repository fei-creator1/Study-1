import React, { useEffect } from 'react'
import 'antd/dist/antd.css'
import axios from 'axios'
import { useRequest } from 'ahooks'

import { Layout, Menu, Breadcrumb, Space, Tabs, Input } from 'antd'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons'
import { UploadOutlined, VideoCameraOutlined } from '@ant-design/icons'

const { Header, Content, Footer, Sider } = Layout

const App: React.FC<any> = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider
        theme="light"
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken)
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}
        style={{ zIndex: '100', boxShadow: '0 0 20px 1px rgba(50,50,50,0.1)' }}
      >
        <Space
          style={{ margin: '10px', color: 'rgba(50,50,50,0.8)', fontSize: '18px', cursor: 'pointer' }}
          size="small"
        >
          <img width="40" src="../public/nfca.png" />
          NFCA接口管理
        </Space>

        <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.SubMenu key="sub1" icon={<UserOutlined />} title="login">
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="sub2" icon={<LaptopOutlined />} title="account">
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="sub3" icon={<NotificationOutlined />} title="syllabus">
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="sub4" icon={<NotificationOutlined />} title="school">
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="sub5" icon={<NotificationOutlined />} title="ncg">
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: '0 0 0 20px',
            height: '54px',
            backgroundColor: '#fff',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Tabs
            defaultActiveKey="1"
            onChange={a => {
              console.log(a)
            }}
            style={{ margin: '9px 0 0 0' }}
          >
            <Tabs.TabPane
              tab={
                <>
                  <LaptopOutlined />
                  文档
                </>
              }
              key="1"
            />
            <Tabs.TabPane
              tab={
                <>
                  <LaptopOutlined />
                  编辑
                </>
              }
              key="2"
            />
            <Tabs.TabPane
              tab={
                <>
                  <LaptopOutlined />
                  调用
                </>
              }
              key="3"
            />
          </Tabs>
          <div>
            <Input.Search
              placeholder="input search text"
              onSearch={onSearch => {
                console.log(onSearch)
              }}
              style={{ width: '250px', margin: '11px' }}
              enterButton
            />
          </div>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            content
          </div>
        </Content>
        <Footer style={{ color: 'rgba(50,50,50,0.8)', textAlign: 'center' }}>
          Copyright © {new Date().getFullYear()} 电气学院NFCA团队 版权所有
        </Footer>
      </Layout>
    </Layout>
  )
}

export default App
