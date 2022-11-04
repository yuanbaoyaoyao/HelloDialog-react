import { makeAutoObservable } from 'mobx'

export default class Sidebar {
    sidebarPath
    constructor() {
        this.sidebarPath = '123'
        makeAutoObservable(this)
    }
    get getcurrentPath() {
        return this.sidebarPath
    }
    setCurrentPath(value: any) {
        this.sidebarPath = value
    }
}  