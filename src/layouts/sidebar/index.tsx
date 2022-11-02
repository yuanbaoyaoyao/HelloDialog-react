import React from 'react';
import { Layout, Menu } from 'antd';
import routesWithInfo from '../../constants/routesWithInfo'
import { MenuClickEventHandler } from 'rc-menu/lib/interface';
import { useLocation, useNavigate } from 'react-router-dom'
import wrapNavigation from '../../utils/wrapWithNavigate'

const { Sider } = Layout;

// //后期根据后端role信息与routesWithInfo动态生成“路由”
//不用实时路由，只需要静态路由

let tempCount = 0
let tempPath = ''

class AppSidebar extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {
            siderItems: [],
            defaultOpenKeys: '',
            defaultSelectedKeys: ''
        }
    }
    getSiderItems = (routes: any) => {
        routes.forEach((item: any, index: any) => {
            let temp: any = {}
            if (item.title != undefined) {
                if (item.children != undefined) {
                    temp = {
                        key: item.path,
                        label: item.title,
                        children: []
                    }
                    this.state.siderItems.push(temp)
                    this.state.defaultOpenKeys = this.state.siderItems[0].key
                } else {
                    temp = {
                        key: tempPath + '/' + item.path,
                        label: item.title,
                    }
                    this.state.siderItems[tempCount].children.push(temp)
                    this.state.defaultSelectedKeys = this.state.siderItems[0].children[0].path
                }
            }
            if (item.children != undefined) {
                tempCount = index - 1
                tempPath = item.path
                this.getSiderItems(item.children)
            }

        });
    }
    handleClick = (e: MenuClickEventHandler) => {
        console.log("e:", e)
        this.props.to(e.key)
    }
    componentDidMount(): void {
        this.state.siderItems = []
        this.getSiderItems(routesWithInfo)
        this.setState({
            siderItems: this.state.siderItems,
            defaultOpenKeys: this.state.defaultOpenKeys
        })
    }
    render() {
        return (
            <div>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={[this.state.defaultOpenKeys]}
                        defaultOpenKeys={[this.state.defaultOpenKeys]}
                        style={{ height: '100%', borderRight: 0 }}
                        items={this.state.siderItems}
                        onClick={this.handleClick}
                    />
                </Sider>
            </div>
        );
    }
}

const NavigateAppSidebar = wrapNavigation(AppSidebar)

export default NavigateAppSidebar