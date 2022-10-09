import HeroSection from "../components/HomeContent/HeroSection";
import Navbar from "../components/Navbar";


export default function Home() {
  return (
    <>
       <Navbar />
       <div className="bg-teal-50 pt-24">
          <HeroSection />
       </div>
    </>
  )
}
