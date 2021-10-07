import React from 'react'
import { App_State } from '../State_manager';

export default function CartProduct(props) {
    const [{cart},dispatch] =App_State();
/////////////////////////////////////////////////////////////////////////////

        const increment = () => {
            dispatch({
                type:"INCREACE_QTY",
                item:{
                    ID:props.ID,
                }
            })
        } 
/////////////////////////////////////////////////////////////////////////////

        const decrement = () => {
            if(props.quantity<=1){
                dispatch({
                    type:"DELETE_FROM_CART",
                    item:{
                        ID:props.ID,
                    }
                })
            }else{
                dispatch({
                type:"DECREACE_QTY",
                item:{
                    ID:props.ID,
                }
            })
            }
        } 
/////////////////////////////////////////////////////////////////////////////

    return (
        <div className="flex justify-between mt-6 border-b-2 py-4 border-gray-600 border-opacity-10 bg-gray-100 p-4">
            <div className="flex">
                <img className="h-20 w-20 object-cover rounded" src={props.image} />
                 <div className="mx-3">
                    <h3 className="text-sm text-gray-600">{props.name}</h3>
                    <div className="flex items-center mt-2">
                        <button onClick={increment} className="text-gray-500 focus:outline-none focus:text-gray-600">
                            <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </button>
                        <span className="text-gray-700 mx-2">{props.quantity}</span>
                        <button onClick={decrement} className="text-gray-500 focus:outline-none focus:text-gray-600">
                            <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
            <span className="text-gray-600">{props.price * props.quantity}$</span>
        </div>
    )
}
