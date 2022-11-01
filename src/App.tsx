import React from 'react'
import Router from './router'
import { RouterProvider } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <RouterProvider router={Router} />
    );
  }
}

export default App;