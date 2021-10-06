import React  from 'react'
import { App_State } from '../State_manager';

export default function Product(props) {
    const [{cart}, dispatch] =App_State();
/////////////////////////////////////////////////////////////////////////////

    const addToCart = () => {
        if(!cart.find((item) => item.ID === props.ID)){
             dispatch({
            type:"ADD_PRODUCT",
            item:{
                ID:props.ID,
                name:props.name,
                price:props.price,
                quantity:1,
            },
        })
        }
        else{
           dispatch({
                type:"INCREACE_QTY",
                item:{
                    ID:props.ID,                    
                },
            })
        }
    }
/////////////////////////////////////////////////////////////////////////////

    return (
    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
        <div className="flex items-end justify-end h-56 w-full bg-cover bg-green-900" >
                        <button onClick={ (e) => {
                            addToCart()
                            e.target.childNodes[0].classList.toggle("hidden")
                            e.target.childNodes[1].classList.toggle("hidden")
                            setTimeout( () => {
                            e.target.childNodes[0].classList.toggle("hidden")
                            e.target.childNodes[1].classList.toggle("hidden")
                            },500)
                        }} className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        <svg className="hidden pointer-events-none" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
                        <svg className="pointer-events-none" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff"><path d="M0 0h24v24H0zm18.31 6l-2.76 5z" fill="none"/><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"/></svg></button>
                    </div>
                    <div className="px-5 py-3">
                    <h3 className="text-gray-700 uppercase">{props.name}</h3>
                    <span className="text-gray-500 mt-2">${props.price}</span>
                </div>
                </div>
    )
}
