import React, { useEffect } from 'react'
import axios from 'axios'
import { useRequest } from 'ahooks'
import { Layout, Menu, Space, Tabs, Input, Avatar, Card, PageHeader, Row, Col, Tag } from 'antd'
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  ApiOutlined,
  ProfileOutlined,
  EditOutlined,
} from '@ant-design/icons'
import css from './app.css'

const { Header, Content, Footer, Sider } = Layout

const App: React.FC<any> = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
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
          style={{
            margin: '10px',
            color: 'rgba(50,50,50,0.8)',
            fontSize: '18px',
            cursor: 'pointer',
            width: '100%',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            wordBreak: 'break-all',
          }}
          size="small"
        >
          <img width="40" src="../public/nfca.png" />
          NFCA接口管理
        </Space>

        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
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
                  <ProfileOutlined />
                  文档
                </>
              }
              key="1"
            />
            <Tabs.TabPane
              tab={
                <>
                  <EditOutlined />
                  编辑
                </>
              }
              key="2"
            />
            <Tabs.TabPane
              tab={
                <>
                  <ApiOutlined />
                  调用
                </>
              }
              key="3"
            />
          </Tabs>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Input.Search
              placeholder="input search text"
              onSearch={onSearch => {
                console.log(onSearch)
              }}
              style={{ maxWidth: '250px' }}
              enterButton
            />
            <Avatar style={{ margin: '0 20px' }} icon={<UserOutlined />} />
          </div>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <PageHeader className="site-page-header" title="获取登录信息" subTitle="获取用户详细信息" />
          <Card>
            <Row gutter={[16, 16]}>
              <Col className={css.title} span={2}>
                路径
              </Col>
              <Col span={10}>
                <Tag color="green">POST</Tag>login/getInfo
              </Col>
              <Col className={css.title} span={2}>
                状态
              </Col>
              <Col span={10}>已完成</Col>
              <Col className={css.title} span={2}>
                Card content
              </Col>
              <Col span={10}>Card content</Col>
              <Col className={css.title} span={2}>
                Card content
              </Col>
              <Col span={10}>Card content</Col>
            </Row>
          </Card>
        </Content>
        <Footer style={{ color: 'rgba(50,50,50,0.8)', textAlign: 'center', fontSize: '13px' }}>
          Copyright © {new Date().getFullYear()} 电气学院NFCA团队 版权所有
        </Footer>
      </Layout>
    </Layout>
  )
}

export default App
