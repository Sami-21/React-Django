import React from 'react'
import { App_State } from '../State_manager';
import Product from './Product'
import data from '../MOCK_DATA.json'

export default function Category({name}) {

    const [{cart}] =App_State();
/////////////////////////////////////////////////////////////////////////////

    // useEffect(() => {
    //     localStorage.setItem("cart",cart)
    //         }, [cart])
            
/////////////////////////////////////////////////////////////////////////////

    return (
        <div className="container  mx-auto ">
            <h3 className="text-gray-700 text-2xl font-medium">{name} products</h3>
            <span className="mt-3 text-sm text-gray-500">{data.filter((item) => item.category === {name}.name).length} Products available</span>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                {data.filter((item) => item.category === {name}.name).map((product) => 
            <Product key={product.id} ID={product.id} name={product.name} price={product.price} image={product.image}/>
            )}
           
           </div>
           {/* <div className="flex  justify-center">
                <div className="flex rounded-md mt-8">
                    <a href="#" className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-blue-500 hover:text-white"><span>Previous</span></a>
                    <a href="#" className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"><span>1</span></a>
                    <a href="#" className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"><span>2</span></a>
                    <a href="#" className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"><span>3</span></a>
                    <a href="#" className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 rounded-r hover:bg-blue-500 hover:text-white"><span>Next</span></a>
                </div>
            </div> */}
            
        </div>
    )
}

