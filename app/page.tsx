'use client';

import Feature from "@/components/Feature/Feature"
import GetApp from "@/components/GetApp/GetApp"
import Hero from "@/components/Hero/Hero"
import Pacages from "@/components/Pacages/Pacages"
import Testimonals from "@/components/Testimonials/Testimonals"
import { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {

    
  useEffect(() => {
   const initAos = async () => {
       await import('aos')
       AOS.init({
         duration: 1000,
         once: true,
         easing: 'ease',
         offset: 100,
         anchorPlacement: 'top-bottom',
       });
   }
   initAos()
}, [])




   return (
      <main className="main">
        <Hero />
        <Feature />
        <Pacages />
        <Testimonals />
        <GetApp />
      </main>
   
   )
}


export default Home