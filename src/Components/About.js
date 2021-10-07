import React from 'react'
import image from '../ressources/geneva-switzerland-march-rolex-window-store-fashionable-mechanical-watches-sale-luxury-swiss-watch-manufacturer-175755370.jpg'

export default function About() {
    return (
        <div className="container flex  md:flex-row md:h-96 h-auto flex-col items-center justify-between   rounded ">
            <aside className="h-full w-full md:px-8 md:py-12 pb-12 text-center">
                <h1 className="text-5xl pb-4">Store</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate</p>
            </aside>
            <div className="md:h-full h-72 w-full" >
                <img className="bg-cover w-full h-full rounded-lg"  src={image} alt="store showcase" />
            </div>
        </div>
    )
}
 