import { Layout, MenuProps, Menu } from 'antd';
import { GithubOutlined } from '@ant-design/icons'
const { Header } = Layout;

let navItems: MenuProps['items'] = ['guides', 'apiDocs', 'donate'].map(key => ({
    key,
    label: `${key}`,
}));
navItems.push({
    key: 'github',
    label: '',
    icon: <GithubOutlined />
})

const HeaderComponent = () => {
    return (
        <Header className="header"
            style={{
                position: 'fixed',
                width: '100%',
                height: '10%',
                zIndex: '2'
            }}>
            <Menu theme="dark" mode="horizontal" items={navItems} />
        </Header>
    )
}

export default HeaderComponent