import { Layout, MenuProps, Menu } from 'antd';
const { Header } = Layout;

const navItems: MenuProps['items'] = ['guides', 'apiDocs', 'donate'].map(key => ({
    key,
    label: `${key}`,
}));

const HeaderComponent = () => {
    return (
        <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={navItems} />
        </Header>
    )
}

export default HeaderComponent