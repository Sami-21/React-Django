import React from 'react'
import { Link } from 'react-router-dom'

export default function PopUp() {
    return (
        <div id="Order_submission" className="z-30 hidden w-screen min-h-screen items-center justify-center"><div id="redirect-window" className="border rounded-md mt-40 mx-auto w-80 h-60 shadow p-8 text-center leading-10"><h1 className="my-8 text-2xl">your order has been successfully submitted</h1> <Link to='/' className="w-40 mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded">OK</Link></div></div>

    )
}
