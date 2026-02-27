// "use client"
// import { useCartStore } from "@/store/cartStore"

// export default function CartPage() {
//     const cart = useCartStore((state) => state.cart)
//     return (
//         <main className="min-h-screen bg-gary-100 p-10">
//             <h1 className="text-3xl font-bold">
//                 Cart Page
//             </h1>
//             <p className="mt-4">Items in Cart:{cart.length}</p>
//             <div className="mt-6">{cart.map((item) => (
//                 <div key={item.id} className="bg-white text-blue-400 p-4 rounded shadow mb-3">{item.name}-${item.price}
//                 <br/>
//                 <button 
//                 onClick={()=>useCartStore.getState().onDelete(item.id)}className="mt-4 bg-red-500 text-white px-4 py-2 rounded" >Delete</button></div>))}</div>
//         </main>
//     )
// }