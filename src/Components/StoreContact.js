import { Input } from 'postcss'
import React, { useEffect } from 'react'

export default function StoreContact() {
    useEffect(() => {
        
    }, [])
    return (
        <div className="container ">
             <form id="" className="flex flex-col items-center ml-8 mr-8 it">
                        <label htmlFor="fullName" className="flex w-full flex-col items-center mt-4 ">
                            <h4 className="text-sm text-gray-500 font-medium">FullName</h4>
                            <input className="shadow-md lg:w-1/2 w-full p-4 mt-4 rounded-md outline-none focus:ring-2 focus:ring-blue-500 " type="text" name="fullName" placeholder="enter your full name"   required/>
                        </label>
                        <label htmlFor="email" className="flex w-full flex-col items-center mt-4">
                            <h4 className="text-sm text-gray-500 font-medium">email address</h4>
                            <input className="shadow-md   lg:w-1/2 w-full p-4 mt-4 rounded-md outline-none focus:ring-2 focus:ring-blue-500 " type="email" name="email" placeholder="enter your email address" required/>
                        </label>
                        <label htmlFor="phoneNumber" className="flex w-full flex-col items-center mt-4">
                            <h4 className="text-sm text-gray-500 font-medium">Phone number</h4>
                            <input className="shadow-md lg:w-1/2 w-full p-4 mt-4 rounded-md outline-none focus:ring-2 focus:ring-blue-500 " type="text" name="phoneNumber" placeholder="enter your phone number" required/>
                        </label>
                        <label htmlFor="message" className="flex w-full flex-col items-center mt-4">
                            <h4 className="text-sm text-gray-500 font-medium">Message</h4>
                            <textarea className="shadow-md md:h-auto h-40 lg:w-1/2 w-full p-4 mt-4 rounded-md outline-none focus:ring-2 focus:ring-blue-500 " name="message" placeholder="type your message here..." required/>
                        </label>
                        <input type="submit" className="w-40 mt-4 px-4 py-2 uppercase bg-blue-600 cursor-pointer text-white rounded-md" value="send" />
                    </form>
        </div>
    )
}
