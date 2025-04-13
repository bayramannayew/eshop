// import {makeAutoObservable} from "mobx";

// export default class DeviceStore {
//     constructor(){
//         this._types = [
           
//         ]
//         this._brands = [
           
//         ]
//         this._devices = [

//         ]
//         this._selectedType = {}
//         this._selectedBrand = {} 
//         this._page = 1
//         this._totalCount = 0
//         this._limit = 3
//         makeAutoObservable(this)
//     }
//     setTypes(types){
//         this._types = types
//     }
//     setBrands(brands){
//         this._brands = brands
//     }
//     setDevices(devices){
//         this._devices = devices
//     }
//     setSelectedType(type){
//         this.setPage(1)
//     this._selectedType = type
//     }
//     setSelectedBrand(brand){
//         this.setPage(1)
//         this._selectedBrand = brand
//         }

// setPage(page){
//     this._page = page
// }

// setTotalCount(count){
//     this._totalCount= count
// }

//     get types(){
//         return this._types
//     }
//     get brands(){
//         return this._brands
//     }
//     get devices(){
//         return this._devices
//     }
//     get selectedType(){
//         return this._selectedType
//     }
//     get selectedBrand(){
//         return this._selectedBrand
//     }

//     get totalCount(){
//         return this._totalCount
//     }
//     get page(){
//         return this._page
//     }
//     get limit(){
//         return this._limit
//     }
// }
import { create } from "zustand";

const useDeviceStore = create((set) => ({
    types: [],
    users: [],
    brands: [],
    devices: [],
    orders: [],
    selectedType: {},
    selectedUser: {},
    selectedDevice: {},
    selectedBrand: {},
    page: 1,
    totalCount: 0,
    limit: 3,

    setTypes: (types) => set({ types }),
    setBrands: (brands) => set({ brands }),
    setDevices: (devices) => set({ devices }),
    setUsers: (users) => set({ users }),
    setOrders: (orders) => set({ orders }),
    setSelectedType: (type) => set((state) => ({ selectedType: type, page: 1 })),
    setSelectedBrand: (brand) => set((state) => ({ selectedBrand: brand, page: 1 })),
    setSelectedUser: (user) => set((state) => ({ selectedUser: user, page: 1 })),
    setPage: (page) => set({ page }),
    setTotalCount: (count) => set({ totalCount: count }),
}));

export default useDeviceStore;