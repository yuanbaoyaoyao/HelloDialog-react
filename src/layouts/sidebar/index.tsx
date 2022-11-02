import React from 'react';
import { Layout, Menu } from 'antd';
import routesWithInfo from '../../constants/routesWithInfo'

const { Sider } = Layout;

// //后期根据后端role信息与routesWithInfo动态生成“路由”
//不用实时路由，只需要静态路由

let tempCount = 0
let tempPath = ''

class AppSidebar extends React.Component {
    state = {
        siderItems: [],
        defaultOpenKeys: ''
    }
    getSiderItems = (routes: any) => {
        let count = 0
        routes.forEach((item: any, index: any) => {
            let temp: any = {}
            if (item.title != undefined) {
                console.log("item:", item)
                if (item.children != undefined) {
                    temp = {
                        key: item.path,
                        label: item.title,
                        children: []
                    }
                    this.state.siderItems.push(temp)
                } else {
                    temp = {
                        key: tempPath + '/' + item.path,
                        label: item.title,
                    }
                    this.state.siderItems[tempCount].children.push(temp)
                }
            }
            if (item.children != undefined) {
                tempCount = index - 1
                tempPath = item.path
                this.getSiderItems(item.children)
            }

        });
        console.log("this.state.siderItem:", this.state.siderItems)
        this.state.defaultOpenKeys = this.state.siderItems[0].key
    }
    componentDidMount(): void {
        this.state.siderItems = []
        this.getSiderItems(routesWithInfo)
        this.setState({
            siderItems: this.state.siderItems,
            defaultOpenKeys: this.state.defaultOpenKeys
        })
        console.log("this.state.siderItems:", this.state.siderItems)
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
                    />
                </Sider>
                <p>{this.state.defaultOpenKeys}</p>
            </div>
        );
    }
}
export default AppSidebar