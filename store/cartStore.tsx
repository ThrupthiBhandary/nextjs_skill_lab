import {create} from "zustand"
import {Product} from "@/types/product"
interface CartState{
    cart: Product[]
    addToCart:(product: Product)=>void
    onDelete:(productId:number)=>void
}

export const useCartStore =create<CartState>((set)=>({
    cart:[],
    addToCart:(product)=>
        set((state)=>({
            cart:[...state.cart,product],
        })),
    onDelete:(productId)=>set((state)=>({
            cart:state.cart.filter((item)=>item.id!==productId)
        }))

    
}))