import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "antd/dist/antd.less";
import StoreContext from './contexts/storeContext'
import store from './store'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>
)
