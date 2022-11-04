import React, { useState, useEffect } from 'react'
import { Layout, Menu } from 'antd'
import routesWithInfo from '../../constants/routesWithInfo'
import { MenuClickEventHandler } from 'rc-menu/lib/interface'
import { useLocation } from 'react-router-dom'
import { useStore } from '../../hooks/storeHook'

const { Sider } = Layout

//后期根据后端role信息与routesWithInfo动态生成“路由”
//不用实时路由，只需要静态路由

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
        <Sider>
            <Menu
                mode="inline"
                defaultSelectedKeys={[defaultSelectedKeys]}
                defaultOpenKeys={[defaultOpenKeys]}
                style={{ height: '100%', borderRight: 0 }}
                items={siderItems}
                onClick={handleClick}
            />
        </Sider>
    );
}

export default AppSidebar