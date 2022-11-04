import { Breadcrumb } from 'antd';
import { useStore, observer } from '../../hooks/storeHook'

//先弄sidebar，然后根据sidebar生成面包屑

const BreadcrumbComponent = () => {
    const { sidebarStore } = useStore()
    let BreadcrumbItems: any = []
    sidebarStore.sidebarPath.split('/').forEach((item, index) => {
        if (index == sidebarStore.sidebarPath.split('/').length - 1 && index > 0 && item == '') {
            BreadcrumbItems.push('first')
        } else if (item != '') {
            BreadcrumbItems.push(item)
        }
    })

    return (
        <Breadcrumb style={{ margin: '16px 0', paddingLeft: '16px' }}>
            {
                BreadcrumbItems.map((item: any, index: any) => {
                    return (
                        <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
                    )
                })
            }
        </Breadcrumb>
    )
}

export default observer(BreadcrumbComponent) 
