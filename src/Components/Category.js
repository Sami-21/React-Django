import React, { useState } from 'react'
import { App_State } from '../State_manager';
import Product from './Product'
import data from '../MOCK_DATA.json'
import Pagination from './Pagination';

export default function Category({name}) {
    const [{cart}] =App_State();
/////////////////////////////////////////////////////////////////////////////
    const [products] = useState([...data.filter((item) => item.category === {name}.name)])
    const [pageNumber, setpageNumber] = useState(1)
    const [productPerPage] = useState(4)
/////////////////////////////////////////////////////////////////////////////
const freeNavigation = (number) => {
    setpageNumber(number)
}
/////////////////////////////////////////////////////////////////////////////
const NextPage = () => {
    if(pageNumber<Math.ceil(products.length/productPerPage)){
    setpageNumber(pageNumber+1)
    }
}
/////////////////////////////////////////////////////////////////////////////
const PreviousPage = () => {
    if(pageNumber>1){
        setpageNumber(pageNumber-1)
    }
}
/////////////////////////////////////////////////////////////////////////////
    const lastProduct = pageNumber * productPerPage
    const firstProduct = lastProduct - productPerPage
/////////////////////////////////////////////////////////////////////////////
    return (
        <div className="container  mx-auto ">
            <h3 className="text-gray-700 text-2xl font-medium">{name} products</h3>
            <span className="mt-3 text-sm text-gray-500">{products.length} Products available</span>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                {products.slice(firstProduct,lastProduct).map((product) => 
            <Product key={product.id} ID={product.id} name={product.name} price={product.price} image={product.image}/>
            )}
           
           </div>
         
            <Pagination TotalProducts={products.length} ProductsPerPage={productPerPage} pageNumber={pageNumber} update={freeNavigation} next={NextPage} previous={PreviousPage} />
            
        </div>
    )
}

