import React, { useEffect, useState }  from 'react'
import { App_State } from '../State_manager'
import CartProduct from './CartProduct'
import {Link} from 'react-router-dom'
import CurrencyFormat from 'react-currency-format';
import { cartTotal , categoriesNumber } from '../reducer';
import data from '../MOCK_DATA.json'
import Product from './Product';

export default function Header() {

    const [search, setsearch] = useState('')
    const [filteredData, setfilteredData] = useState([])   
    const [{cart},dispatch] =App_State();

    /////////////////////////////////////////////////////////////////////////////  
    const togglecart = () => {
        document.querySelector("#cart").classList.toggle("translate-x-full")
        document.querySelector("#cart").classList.toggle("ease-in")
        document.querySelector("#cart").classList.toggle("translate-x-0")
        document.querySelector("#cart").classList.toggle("ease-out")
    }
    /////////////////////////////////////////////////////////////////////////////
    const togglemenu = () => {
        document.querySelector("nav").classList.toggle("hidden")
    }
    /////////////////////////////////////////////////////////////////////////////
    const togglecategories = () => {
    document.querySelector("#categories").classList.toggle("hidden")
    document.querySelector("#category-icon")?.classList.toggle("rotate-180")
    }

    /////////////////////////////////////////////////////////////////////////////

    useEffect(() => {
       
        if(search===""){
            setfilteredData([])
            document.querySelector("#search_output").style.display = "none"
        }else{
            if(data.some((item) => item.name.toLowerCase().includes(search.toLowerCase()))===true){
                document.querySelector("#search_output").style.display = "block"           
                document.querySelector("#found_products").style.display = "grid"   
                document.querySelector("#not_found_msg").style.display = "none"            
                setfilteredData(data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())))                  
            }else{
                console.log("no match")
                document.querySelector("#search_output").style.display = "block" 
                document.querySelector("#not_found_msg").style.display = "block"   
                document.querySelector("#found_products").style.display = "none"   
            }                      
        }
    }, [search])                   
    /////////////////////////////////////////////////////////////////////////////
    return (
        <header className="min-w-full mb-10">
        <div className="container mx-auto px-6 py-3">
            <div className="flex items-center justify-between">
                <div className="hidden w-full text-gray-600 md:flex md:items-center">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z" fill="currentColor"></path>
                    </svg>
                    <span className="mx-1 text-sm">Batna</span>
                </div>
                <div className="w-full text-gray-700 md:text-center text-2xl font-semibold">
                    Store
                </div>
                <div className="flex items-center justify-end w-full">

                    <button onClick={togglecart} className="flex text-gray-600 focus:outline-none mx-4 sm:mx-0">
                        <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                         {cart.length>0 ? 
                    <span className=" bg-blue-600 text-sm text-center text-white rounded  px-1 pointer-events-none">{cart.reduce((amount,item) => item.quantity + amount , 0)}</span>:
                    <span></span>
                }
                    </button>
                   

                    <div className="flex sm:hidden">
                        <button onClick={togglemenu} type="button" className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <nav className="sm:flex sm:justify-center sm:items-center mt-4 hidden">
                <div className="flex flex-col sm:flex-row">
                    <Link to="/" className="mt-3 text-gray-500  hover:text-gray-900 hover:transition duration-300 sm:mx-3 sm:mt-0 " href="#">Home</Link>
                  <a className="flex items-center mt-3 text-gray-500  hover:text-gray-900 hover:transition duration-300 sm:mx-3 sm:mt-0" onClick={togglecategories} href="#">Categories <svg id="category-icon" className="ml-2 relative transition transform" version="1.1"   x="0px" y="0px"
	 width="8px" height="8px" viewBox="0 0 451.847 451.847"
	 >
<g>
	<path  d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
		c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
		c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg></a>

                    <a className="mt-3 text-gray-500  hover:text-gray-900 hover:transition duration-300 sm:mx-3 sm:mt-0" href="#">Contact</a>
                    <a className="mt-3 text-gray-500  hover:text-gray-900 hover:transition duration-300 sm:mx-3 sm:mt-0" href="#">About</a>
                </div>
               
            </nav>
<ul id="categories" className="flex justify-evenly hidden mt-4">
    <li className="mt-3 text-gray-500  hover:text-gray-900 hover:transition duration-300 sm:mx-3 sm:mt-0">category1</li>
    <li className="mt-3 text-gray-500  hover:text-gray-900 hover:transition duration-300 sm:mx-3 sm:mt-0">category2</li>
    <li className="mt-3 text-gray-500  hover:text-gray-900 hover:transition duration-300 sm:mx-3 sm:mt-0">category3</li>
    <li className="mt-3 mb-3 text-gray-500  hover:text-gray-900 hover:transition duration-300 sm:mx-3 sm:mt-0">category3</li>
</ul>
            <div className="relative mt-6 max-wLg mx-auto">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </span>

                <input onChange={event => setsearch(event.target.value)} className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500  focus:outline-none focus:shadow-outline" type="text" placeholder="Search" />
            </div>
        </div>
        


<div id="cart" className=" fixed right-0 top-0 max-w-xs w-full h-full px-6 py-4 transition duration-300 transform overflow-y-auto bg-white borderL-2 border-gray-300 translate-x-full ease-in">
        <div className="flex items-center justify-between">
            <h3 className="text-2xl font-medium text-gray-700">Your cart</h3>
            <button onClick={togglecart} className="text-gray-600 focus:outline-none">
                <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
        </div>
        <hr className="my-3"/>
        {cart.length===0  ?(<h2 className="text-gray-800 ">your shopping cart is empty</h2>)  
        :(cart.map((item,index) => 
            <CartProduct key={index} ID={item.ID} name={item.name} price={item.price} quantity={item.quantity}/>
        )) }
      
        {cart.length===0 ? 
        <Link to="/checkout"  className="flex items-center justify-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded opacity-40 pointer-events-none">
        <span>Checkout</span>
        <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
    </Link>:
    <>
      <div className="flex items-center justify-between flex-row-reverse my-4">
        <CurrencyFormat  thousandSeparator={true} value={cartTotal(cart)} prefix={"$"} displayType={"text"} />
        <h2>Your total</h2>
        </div>
    <Link to="/checkout"  className="flex items-center justify-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
    <span>Checkout</span>
    <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
</Link>
</>
}                           
    </div>  
    <div id="search_output" className="container mx-auto shadow-md p-10 rounded-lg hidden bg-gray-200">
        <div id="not_found_msg" className="text-center mx-auto font-bold hidden"><h2>Product Not Found</h2></div>
        <div id="found_products" className="gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 hidden">
        {filteredData.map((item, index) => 
        <Product key={index} ID={item.id} name={item.name} price={item.price} />)}
    </div>
    </div>
    
    </header>

    )
}






