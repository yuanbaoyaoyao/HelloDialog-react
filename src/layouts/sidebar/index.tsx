import React, { useState, useEffect } from 'react'
import { Layout, Menu } from 'antd'
import routesWithInfo from '../../constants/routesWithInfo'
import { MenuClickEventHandler } from 'rc-menu/lib/interface'
import { useLocation } from 'react-router-dom'
import { useStore } from '../../hooks/storeHook'

const { Sider } = Layout

//后期根据后端role信息与routesWithInfo动态生成“路由”
//不用实时路由，只需要静态路由

// let tempCount = 0
// let tempPath = ''

// class AppSidebar extends React.Component {
//     constructor(props: any) {
//         super(props)
//         this.state = {
//             siderItems: [],
//             defaultOpenKeys: '',
//             defaultSelectedKeys: ''
//         }
//     }
//     getSiderItems = (routes: any) => {
//         routes.forEach((item: any, index: any) => {
//             let temp: any = {}
//             if (item.title != undefined) {
//                 if (item.children != undefined) {
//                     temp = {
//                         key: item.path,
//                         label: item.title,
//                         children: []
//                     }
//                     this.state.siderItems.push(temp)
//                     this.state.defaultOpenKeys = this.state.siderItems[0].key
//                 } else {
//                     temp = {
//                         key: tempPath + '/' + item.path,
//                         label: item.title,
//                     }
//                     this.state.siderItems[tempCount].children.push(temp)
//                     this.state.defaultSelectedKeys = this.state.siderItems[0].children[0].path
//                 }
//             }
//             if (item.children != undefined) {
//                 tempCount = index - 1
//                 tempPath = item.path
//                 this.getSiderItems(item.children)
//             }

//         });
//     }
//     handleClick = (e: MenuClickEventHandler) => {
//         // this.props.setSiderPathStore(e.key)
//         this.props.to(e.key)
//     }
//     componentDidMount(): void {
//         this.state.siderItems = []
//         this.getSiderItems(routesWithInfo)
//         this.setState({
//             siderItems: this.state.siderItems,
//             defaultOpenKeys: this.state.defaultOpenKeys
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <Sider width={200} className="site-layout-background">
//                     <Menu
//                         mode="inline"
//                         defaultSelectedKeys={[this.state.defaultOpenKeys]}
//                         defaultOpenKeys={[this.state.defaultOpenKeys]}
//                         style={{ height: '100%', borderRight: 0 }}
//                         items={this.state.siderItems}
//                         onClick={this.handleClick}
//                     />
//                 </Sider>
//             </div>
//         );
//     }
// }

// const NavigateAppSidebar = wrapNavigation(AppSidebar)

// export default NavigateAppSidebar

let tempCount = 0
let tempPath = ''

const AppSidebar = () => {
    const [siderItems, setSiderItems] = useState([])
    const [defaultOpenKeys, setDefaultOpenKeys] = useState('')
    const [defaultSelectedKeys, setDefaultSelectedKeys] = useState('')
    const [currentSiderPath, setCurrentSiderPath] = useState('')
    const { sidebarStore } = useStore()

    let tempSiderItems: any = []

    const getSiderItems = (routes: any) => {
        routes.forEach((item: any, index: any) => {
            let temp: any = {}
            if (item.title != undefined) {
                if (item.children != undefined) {
                    temp = {
                        key: item.path,
                        label: item.title,
                        children: []
                    }
                    tempSiderItems.push(temp)
                } else {
                    temp = {
                        key: tempPath + '/' + item.path,
                        label: item.title,
                    }
                    tempSiderItems[tempCount].children.push(temp)
                }
            }
            if (item.children != undefined) {
                tempCount = index - 1
                tempPath = item.path
                getSiderItems(item.children)
            }
        });
    }

    const handleClick = (e: MenuClickEventHandler) => {
        setCurrentSiderPath(e.key)
    }

    getSiderItems(routesWithInfo)

    useEffect(() => {
        console.log("tempSiderItems:", tempSiderItems)
        setDefaultOpenKeys(tempSiderItems[0].key)
        setDefaultSelectedKeys(tempSiderItems[0].children[0].path)
        setSiderItems(tempSiderItems)
    }, [])

    useEffect(() => {
        console.log("currentSiderPath:", currentSiderPath)
        sidebarStore.setCurrentPath(currentSiderPath)
    }, [currentSiderPath])


    return (
        <div>
            <Sider width={200} className="site-layout-background">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={[defaultSelectedKeys]}
                    defaultOpenKeys={[defaultOpenKeys]}
                    style={{ height: '100%', borderRight: 0 }}
                    items={siderItems}
                    onClick={handleClick}
                />
            </Sider>
        </div>
    );
}

export default AppSidebar