import Feature from "@/components/Feature/Feature"
import Hero from "@/components/Hero/Hero"
import Pacages from "@/components/Pacages/Pacages"
import Testimonals from "@/components/Testimonials/Testimonals"


const Home = () => {
   return (
      <main className="main">
        <Hero />
        <Feature />
        <Pacages />
        <Testimonals />
      </main>
   
   )
}


export default Home