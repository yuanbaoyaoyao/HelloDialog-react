import { useContext } from 'react'
import StoreContext from '../contexts/storeContext'
import { observer } from 'mobx-react-lite'

const useStore = () => useContext(StoreContext)

export {
    observer,
    useStore
}