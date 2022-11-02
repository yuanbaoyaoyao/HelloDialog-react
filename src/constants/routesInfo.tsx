import Start from '../pages/start'
import GuidesFirst from '../pages/guides/first'
import GuidesSecond from '../pages/guides/second'
import GuidesThird from '../pages/guides/third'
import GuidesForth from '../pages/guides/forth'
import ApiDocsFirst from '../pages/apiDocs/first'
import ApiDocsSecond from '../pages/apiDocs/second'
import ApiDocsThird from '../pages/apiDocs/third'
import ApiDocsForth from '../pages/apiDocs/forth'
import AppLayouts from '../layouts/index'

import { RouteObject } from 'react-router-dom'
type routesInfo = RouteObject & {
    title?: String | null
    children?: RouteObject[] & {
        title?: String | null
    };
}

const routesWithInfo: routesInfo[] = [
    {
        path: '/',
        element: <Start />,
    },
    {
        path: '/guides',
        title: 'guides',
        element: <AppLayouts />,
        children: [
            {
                path: '',
                title: 'guidesFirst',
                element: <GuidesFirst />
            },
            {
                path: 'second',
                title: 'guidesSecond',
                element: <GuidesSecond />
            },
            {
                path: 'third',
                title: 'guidesThird',
                element: <GuidesThird />
            },
            {
                path: 'forth',
                title: 'guidesForth',
                element: <GuidesForth />
            },
        ]
    },
    {
        path: '/apiDocs',
        title: 'ApiDocs',
        element: <AppLayouts />,
        children: [
            {
                path: '',
                title: 'apiDocsFirst',
                element: <ApiDocsFirst />,
            },
            {
                path: 'second',
                title: 'apiDocsSecond',
                element: <ApiDocsSecond />
            },
            {
                path: 'third',
                title: 'apiDocsThird',
                element: <ApiDocsThird />
            },
            {
                path: 'forth',
                title: 'apiDocsForth',
                element: <ApiDocsForth />
            },
        ]
    },
]

export default routesWithInfo