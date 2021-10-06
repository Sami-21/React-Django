import React from 'react'
import { Link } from 'react-router-dom';
import { App_State } from '../State_manager';

export default function Overview() {
    
    const [{client},dispatch] =App_State();
    const address = client?.address
/////////////////////////////////////////////////////////////////////////////

    const shipping_overview = () => {
        document.querySelector('#shipping').classList.toggle('hidden')
        document.querySelector('#overview').classList.toggle('hidden')
    }
/////////////////////////////////////////////////////////////////////////////
const submissionHandler = () => {
        document.querySelector("#Order_submission").classList.remove("hidden")
        document.querySelector("#checkout_screen").classList.add("hidden")     
}
/////////////////////////////////////////////////////////////////////////////

    return (
        <div id="overview" className="hidden flex flex-col justify-between h-full">
         <div className="flex items-center justify-between">
                        <button className="flex text-sm text-blue-500 focus:outline-none"><span className="flex items-center justify-center text-white bg-blue-500 rounded-full h-5 w-5 mr-2">1</span> Contact</button>
                        <button className="flex text-sm text-blue-500 focus:outline-none"><span className="flex items-center justify-center text-white bg-blue-500 rounded-full h-5 w-5 mr-2">2</span> Shipping</button>
                        <button className="flex text-sm text-gray-700 ml-8 focus:outline-none" ><span className="flex items-center justify-center border-2 border-blue-500 rounded-full h-5 w-5 mr-2">3</span> Overview</button>
                    </div>
       <div className="  flex flex-col justify-between h-60 w-full">
           <div className="flex justify-between"><h4>FullName : </h4> <h4>{client?.FullName}</h4></div>
           <div className="flex justify-between"><h4>email : </h4><h4>{client?.Email}</h4></div>
           <div className="flex justify-between"><h4>Phone Number : </h4><h4>{client?.PhoneNumber}</h4></div>
           <div className="flex justify-between"><h4>Delivery Address : </h4><h4>{address?.DeliveryAddress}</h4></div>
           <div className="flex justify-between"><h4>City : </h4><h4>{address?.City}</h4></div>
           <div className="flex justify-between"><h4>State : </h4><h4>{address?.State}</h4></div>
       </div>
                     <div className="flex items-center justify-between">
                             <button onClick={shipping_overview} className="flex items-center text-gray-700 text-sm font-medium rounded hover:underline focus:outline-none">
                                 <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
                                 <span className="mx-2">return</span>
                             </button>
                             <button onClick={submissionHandler} className="flex items-center px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                 <span>confirm</span>
                                 <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                             </button>
                         </div> 
                 </div>
    )
}
