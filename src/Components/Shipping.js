import React, { useState } from 'react'
import { App_State } from '../State_manager';

export default function Shipping() {
    const [{cart },dispatch] =App_State();
/////////////////////////////////////////////////////////////////////////////
    const contact_shipping = () => {
        document.querySelector('#contact').classList.toggle('hidden')
        document.querySelector('#shipping').classList.toggle('hidden')
    }
/////////////////////////////////////////////////////////////////////////////

    const shipping_payment = (e) => {
        e.preventDefault()
        document.querySelector('#shipping').classList.toggle('hidden')
        document.querySelector('#overview').classList.toggle('hidden')
        dispatch({
            type:"ADDRESS_SET_UP",
            data:{
            DeliveryAddress:address,
            City:city,
            State:state,
            }
        })
    }
/////////////////////////////////////////////////////////////////////////////

const [address, setAddress] = useState("")
const [city, setCity] = useState("")
const [state, setState] = useState("")

/////////////////////////////////////////////////////////////////////////////
    return (
        <div id="shipping" className="hidden h-full">
         <div className="flex items-center justify-between">
                        <button className="flex text-sm text-blue-500 focus:outline-none"><span className="flex items-center justify-center text-white bg-blue-500 rounded-full h-5 w-5 mr-2">1</span> Contact</button>
                        <button className="flex text-sm text-gray-700 ml-8 focus:outline-none"><span className="flex items-center justify-center border-2 border-blue-500 rounded-full h-5 w-5 mr-2">2</span> Shipping</button>
                        <button className="flex text-sm text-gray-500 ml-8 focus:outline-none" disabled=""><span className="flex items-center justify-center border-2 border-gray-500 rounded-full h-5 w-5 mr-2">3</span>Overview</button>
                    </div>
          <form onSubmit={shipping_payment} id="shipping-form" className="flex flex-col ml-8 mr-8">
                         <label htmlFor="address" className="flex flex-col items-center mt-4">
                             <h4 className="text-sm text-gray-500 font-medium"> Delivery Addres</h4>
                             <input className=" w-full p-4 mt-4 rounded-md outline-none focus:ring-2 focus:ring-blue-500 " type="text" name="address" placeholder="enter your delivery address" onChange={(e) => setAddress(e.target.value)} required/>
                         </label>
                         <label htmlFor="city" className="flex flex-col items-center mt-4">
                             <h4 className="text-sm text-gray-500 font-medium"> City </h4>
                             <input className=" w-full p-4 mt-4 rounded-md outline-none focus:ring-2 focus:ring-blue-500 " type="text" name="city" placeholder="enter your city" onChange={(e) => setCity(e.target.value)}  required/>
                         </label>
                         <label htmlFor="state" className="flex flex-col items-center mt-4">
                             <h4 className="text-sm text-gray-500 font-medium"> State</h4>
                            <select className="w-full p-4 mt-4 rounded-md outline-none focus:ring-2 focus:ring-blue-500" defaultValue="none" name="state" onChange={(e) => setState(e.target.value)} placeholder="elect your state" required>
                                <option value="none" disabled >select your state</option> 
                                <option value="Batna">Batna</option>
                                <option value="Others">Others</option>
                            </select>
                         </label>
                     </form>
                     <div className="flex items-center justify-between mt-8">
                             <button onClick={contact_shipping}  className="flex items-center text-gray-700 text-sm font-medium rounded hover:underline focus:outline-none">
                                 <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
                                 <span className="mx-2">return</span>
                             </button>
                             <button type="submit" form="shipping-form" className="flex items-center px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                 <span>Overview</span>
                                 <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                             </button>
                         </div> 
                 </div>
    )
}
