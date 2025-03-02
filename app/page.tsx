import Feature from "@/components/Feature/Feature"
import GetApp from "@/components/GetApp/GetApp"
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
        <GetApp />
      </main>
   
   )
}


export default Home