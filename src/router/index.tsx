import React from 'react'
import { BrowserRouter, createBrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ApiDocs from '../pages/apiDocs'
import Guides from '../pages/guides'
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
// class Router extends React.Component {
//     render() {
//         return (
//             <BrowserRouter>
//                 <Link to='/'>默认路由=首页</Link>
//                 <Link to='/guides'>guides页</Link>
//                 <Link to='/apiDocs'>apiDocs页</Link>
//                 <Routes>
//                     <Route path='/' element={<Start />} />
//                     <Route path='/guides' element={<Guides />} >
//                         <Route path='' element={<GuidesFirst />} />
//                         <Route path='second' element={<GuidesSecond />} />
//                         <Route path='third' element={<GuidesThird />} />
//                         <Route path='forth' element={<GuidesForth />} />
//                     </Route>
//                     <Route path='/apiDocs' element={<ApiDocs />} >
//                         <Route path='' element={<ApiDocsFirst />} />
//                         <Route path='second' element={<ApiDocsSecond />} />
//                         <Route path='third' element={<ApiDocsThird />} />
//                         <Route path='forth' element={<ApiDocsForth />} />
//                     </Route>
//                 </Routes>
//             </BrowserRouter>
//         )
//     }
// }
const Router = createBrowserRouter([
    {
        path: '/',
        element: <Start />
    },
    {
        path: '/guides',
        element: <AppLayouts />,
        children: [
            {
                path: '',
                element: <GuidesFirst />
            },
            {
                path: 'second',
                element: <GuidesSecond />
            },
            {
                path: 'third',
                element: <GuidesThird />
            },
            {
                path: 'forth',
                element: <GuidesForth />
            },
        ]
    },
    {
        path: '/apiDocs',
        element: <AppLayouts />,
        children: [
            {
                path: '',
                element: <ApiDocsFirst />
            },
            {
                path: 'second',
                element: <ApiDocsSecond />
            },
            {
                path: 'third',
                element: <ApiDocsThird />
            },
            {
                path: 'forth',
                element: <ApiDocsForth />
            },
        ]
    },
])
export default Router