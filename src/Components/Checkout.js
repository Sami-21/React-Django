import React, { useEffect } from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';
import { cartTotal } from '../reducer';
import { App_State } from '../State_manager';
import CartProduct from './CartProduct';
import Contact from './Contact';
import Overview from './Overview';
import Shipping from './Shipping';

export default function Checkout() {

    const [{cart},dispatch] =App_State();
    
/////////////////////////////////////////////////////////////////////////////

    useEffect(() => {
       if(cart.length===0){
      document.querySelector("#window_container").classList.remove("hidden")
      document.querySelector("#checkout_screen").classList.add("hidden")
  }
    }, [cart])
    const cartReset = () => {
        dispatch({
            type:"EMPTY_CART",
        })
    }
/////////////////////////////////////////////////////////////////////////////
  
    return (
        <main className="flex flex-col  w-screen min-h-screen mt-16">
                   <div id="window_container" className="z-20 hidden w-full h-full items-center justify-center"><div id="redirect-window" className="border rounded-md mt-40 mx-auto w-80 h-60 shadow p-8 text-center bg-gray-200 leading-10"><h1 className="my-8 text-2xl">your cart is empty</h1> <Link to='/' className="w-40 mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded">go back to home screen</Link></div></div>
                   <div id="Order_submission" className="z-30 hidden w-screen min-h-screen items-center justify-center"><div id="redirect-window" className="border rounded-md mt-40 mx-auto w-80 h-60 shadow p-8 text-center bg-gray-200 leading-10"><h1 className="my-8 text-2xl">your order has been successfully submitted</h1> <Link to='/' onClick={cartReset } className="w-40 mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded">OK</Link></div></div>
                   <div id="checkout_screen" className="z-0 container mx-auto px-6">
            <h3 className="text-gray-700 text-2xl font-medium">Checkout</h3>
            <div className="flex flex-col lg:flex-row mt-8">
                <div className="w-full lg:w-1/2 order-2 shadow border rounded-md p-4 bg-gray-200">                 
                   <Contact />
                   <Shipping />
                   <Overview/>
                </div>
                <div className="w-full mb-8 flex-shrink-0 order-1 lg:w-1/2 lg:mb-0 lg:order-2 h-96">
                    <div className="flex justify-center lg:justify-end">
                        <div className="border rounded-md max-w-md w-full px-4 py-3 bg-gray-200 shadow">
                            <div className="flex items-center justify-between">
                                <h3 className="text-gray-700 font-medium">Order total items {cart.reduce((amount,item) => item.quantity + amount , 0)}</h3>
                            </div>
                        {cart.map((item,index) => 
            <CartProduct key={index} ID={item.ID} name={item.name} price={item.price} quantity={item.quantity}/>)}
        <div className="flex items-center justify-between flex-row-reverse my-4">
        <CurrencyFormat  thousandSeparator={true} value={cartTotal(cart)} prefix={"$"} displayType={"text"} />
        <h2>Your total</h2>
        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </main>
    )
}
