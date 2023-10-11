import {create} from "zustand"

const useStore = create((set)=>({
    isLogin: false,
    toggleLogin: ()=>set((state)=>({isLogin: !state.isLogin}))
}))

export default useStore