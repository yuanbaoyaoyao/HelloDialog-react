import { Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom'
import "./index.less"
import AppSidebar from './Sidebar'
import BreadCrumb from '../components/BreadCrumb'
import Header from './Header'

const { Content } = Layout;

const App: React.FC = (props) => (
    <Layout>
        <Header />
        <Layout style={{
            position: "absolute",
            width: '100%',
            top: '10%'
        }}>
            <AppSidebar />
            <Layout>
                <BreadCrumb />
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                        // position: 'fixed',
                        // top: '10%',
                        // left: '15%',
                        // backgroundColor: 'blueviolet',
                        // width: '100%',
                        // overflow: 'auto'
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    </Layout>
);

export default App;