import { Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom'
import "./index.less"
import AppSidebar from './Sidebar'
import BreadCrumb from '../components/BreadCrumb'
import Header from './Header'

const { Content } = Layout;

// const App: React.FC = (props) => (
//     <Layout>
//         <Header />
//         <Layout>
//             <AppSidebar />
//             <Layout style={{ padding: '0 24px 24px' }}>
//                 <BreadCrumb />
//                 <Content
//                     className="site-layout-background"
//                     style={{
//                         padding: 24,
//                         margin: 0,
//                         minHeight: 280,
//                     }}
//                 >
//                     <Outlet />
//                 </Content>
//             </Layout>
//         </Layout>
//     </Layout>
// );

class App extends React.Component {
    state = {
        currentRoute: '',
    }
    setCurrentRoute = (data: any) => {
        this.setState({ currentRoute: data })
    }
    render(): React.ReactNode {
        return (
            <Layout>
                <Header />
                <Layout>
                    <AppSidebar />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <BreadCrumb />
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
        )
    }
}

export default App;