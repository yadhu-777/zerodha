import { screen,render } from "@testing-library/react";
import Hero from "./components/homepage/hero";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';
import { describe } from "vitest";


describe("trial",()=>{
    
test("image trial",()=>{
    render( <BrowserRouter>
            <Hero />
        </BrowserRouter>)
    const heroimg = screen.getByAltText("heroimg")
 expect(heroimg).toBeInTheDocument()
 expect(heroimg).toHaveAttribute("src","media/image/homeHero.png")
})

   
test("hero button",()=>{
    render( <BrowserRouter>
            <Hero />
        </BrowserRouter>)
    const herobtn = screen.getByRole("button",{name:"Signup for free"})
 expect(herobtn).toBeInTheDocument()
 
})

})