import React from 'react'

export default function Pagination({TotalProducts , ProductsPerPage, pageNumber , update, next ,previous}) {
    let pages=[];
    for(let i=1;i<=Math.ceil(TotalProducts/ProductsPerPage);i++){
        pages.push(i)
    }
    return (
        <nav className="flex  justify-center">
                <div className="flex rounded-md mt-8">
                    <button onClick={() => previous()} className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-blue-500 hover:text-white"><span>Previous</span></button>
                    {pages.map(number  =>  
                    number===pageNumber?   
                    <button className="py-2 px-4 leading-tight b border border-gray-200  border-r-0 bg-blue-500 text-white"><span>{number}</span></button>
                     :
                    <button onClick={() => update(number)}  className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"><span>{number}</span></button>

 )}
                    <button onClick={() => next()} className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 rounded-r hover:bg-blue-500 hover:text-white"><span>Next</span></button>
                </div>
            </nav>
    )
}
