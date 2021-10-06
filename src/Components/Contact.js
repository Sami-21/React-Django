import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { App_State } from '../State_manager';

export default function Contact() {

    const [{cart },dispatch] =App_State();

/////////////////////////////////////////////////////////////////////////////

    const contact_shipping = (e) => {
        e.preventDefault();
        document.querySelector('#contact').classList.toggle('hidden')
        document.querySelector('#shipping').classList.toggle('hidden')
        dispatch({
            type:"CONTACT_SET_UP",
            data:{
            FullName:fullName,
            Email:email,
            PhoneNumber:phoneNumber,
            }
        })
    }

/////////////////////////////////////////////////////////////////////////////

const [fullName, setFullName] = useState("")
const [email, setEmail] = useState("")
const [phoneNumber, setPhoneNumber] = useState("")

/////////////////////////////////////////////////////////////////////////////

    return (
       <div id="contact" className="h-full">
       <div className="flex items-center justify-between">
                        <button className="flex text-sm text-gray-700  focus:outline-none"><span className="flex items-center justify-center  border-2 border-blue-500 rounded-full h-5 w-5 mr-2">1</span> Contact</button>
                        <button className="flex text-sm text-gray-500 ml-8 focus:outline-none"><span className="flex items-center justify-center border-2 border-gray-500 rounded-full h-5 w-5 mr-2">2</span> Shipping</button>
                        <button className="flex text-sm text-gray-500 ml-8 focus:outline-none" ><span className="flex items-center justify-center border-2 border-gray-500 rounded-full h-5 w-5 mr-2">3</span> Overview</button>
                    </div>
         <form onSubmit={contact_shipping} id="contact-form" className="flex flex-col ml-8 mr-8">
                        <label htmlFor="fullName" className="flex flex-col items-center mt-4">
                            <h4 className="text-sm text-gray-500 font-medium"> FullName</h4>
                            <input className=" w-full p-4 mt-4 rounded-md outline-none focus:ring-2 focus:ring-blue-500 " type="text" name="fullName" placeholder="enter your full name" onChange={(e) =>setFullName(e.target.value)}  required/>
                        </label>
                        <label htmlFor="email" className="flex flex-col items-center mt-4">
                            <h4 className="text-sm text-gray-500 font-medium"> email address (optional) </h4>
                            <input className=" w-full p-4 mt-4 rounded-md outline-none focus:ring-2 focus:ring-blue-500 " type="email" name="email" placeholder="enter your email address" onChange={(e) =>setEmail(e.target.value)}/>
                        </label>
                        <label htmlFor="phoneNumber" className="flex flex-col items-center mt-4">
                            <h4 className="text-sm text-gray-500 font-medium"> Phone number</h4>
                            <input className=" w-full p-4 mt-4 rounded-md outline-none focus:ring-2 focus:ring-blue-500 " type="text" name="phoneNumber" placeholder="enter your phone number" onChange={(e) =>setPhoneNumber(e.target.value)} required/>
                        </label>
                    </form>
                    <div className="flex items-center justify-between mt-8">
                            <Link to='/' className="flex items-center text-gray-700 text-sm font-medium rounded hover:underline focus:outline-none">
                                <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
                                <span className="mx-2">return</span>
                            </Link>
                            <button type="submit"  form="contact-form" className="flex items-center px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                <span>Shipping</span>
                                <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </button>
                        </div> 
                </div>
    )
}
