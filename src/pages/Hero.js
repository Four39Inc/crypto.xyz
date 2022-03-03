import { useState } from "react";
import Nav from '../components/Nav';
import Header from '../components/Header';




const Hero = () =>{


    return(
        <div>
            <div className="h-screen overflow-hidden">
            <Nav />
            <Header />
            </div>
        </div>
    )



   
}

export default Hero;