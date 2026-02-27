// "use client"

// import {useState} from "react"
// import ProductList from "@/components/ProductList"
// import {products} from "@/features/products/data"
// import {Product} from "@/types/product"


// export default function Home(){
//     const [cart,setCart]=useState<Product[]>([])
//     const addToCart =(product:Product)=>{
//         setCart([...cart,product])
//     }
//     return(
//         <main className="min-h-screen bg-gray-100 p-10">
//             <h1 className="text-3xl text-blue-800 font-bold">
//                 Zustand cart project
//             </h1>
//             <p className="mt-4 text-blue-800">
//                 Cart otems:{cart.length}
//             </p>
//             <ProductList
//             products={products}
//             onAdd={addToCart}/>
//         </main>
//     )
// }

// "use client"


// import ProductList from "@/components/ProductList"
// import {products} from "@/features/products/data"
// import Link from "next/link"
// import { useCartStore } from "@/store/cartStore"

// export default function Home(){
//     const cart=useCartStore((state)=>state.cart)
//    const addToCart=useCartStore((state)=>state.addToCart)
    
//     return(
//         <main className="min-h-screen bg-gray-100 p-10">
//             <h1 className="text-3xl text-blue-800 font-bold">
//                 Zustand cart project
//             </h1>
//             <p className="mt-4 text-blue-800">
//                 Cart items:{cart.length}
//             </p>
//             <ProductList
//             products={products}
//             onAdd={addToCart}/>
//             <Link href="/cart" className="mt-6 inline-block bg-green-600 text-white px-4 py-2 rounded">
//             Go to cart page</Link>
//         </main>
//     )
// }

"use client"


import ProductList from "@/components/ProductList"
import {products} from "@/features/products/data"
import Link from "next/link"
import { useCartStore } from "@/store/cartStore"

export default function Home(){
    const cart=useCartStore((state)=>state.cart)
   const addToCart=useCartStore((state)=>state.addToCart)
    
    return(
        <main className="min-h-screen bg-gray-100 p-10">
            <h1 className="text-3xl text-blue-800 font-bold">
                Zustand cart project
            </h1>
            <p className="mt-4 text-blue-800">
                Cart items:{cart.length}
            </p>
            <ProductList
            products={products}
            onAdd={addToCart}/>
            <Link href="/cart" className="mt-6 inline-block bg-green-600 text-white px-4 py-2 rounded">
            Go to cart page</Link><br/>
        <Link href='./classroom' className="text-purple-600">Student management</Link><br/>
        </main>
    )
}
