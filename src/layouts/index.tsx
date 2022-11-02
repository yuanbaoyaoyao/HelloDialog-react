import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom'
import "./index.less"
import AppSidebar from './sidebar'
import routesWithInfo from '../constants/routesWithInfo'

const { Header, Content } = Layout;

const navItems: MenuProps['items'] = ['guides', 'apiDocs', 'donate'].map(key => ({
    key,
    label: `${key}`,
}));

const App: React.FC = () => (
    <Layout>
        <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={navItems} />
        </Header>
        <Layout>
            <AppSidebar />
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    </Layout>
);

export default App;