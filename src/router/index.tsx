import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ApiDocs from '../pages/apiDocs'
import Guides from '../pages/guides'
import Start from '../pages/start'
class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Start />} />
                    <Route path='/guides' element={<Guides />} />
                    <Route path='/apiDocs' element={<ApiDocs />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
export default Router