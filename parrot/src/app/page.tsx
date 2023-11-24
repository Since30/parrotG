
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServiceSection'
import Footer from '@/components/Footer'
import TestimonialsSection from '@/components/Testimonial'




export default function Home() {
  return (
    <>

    <Navbar />
    <main>
    <HeroSection />
    <ServicesSection/>  
    <TestimonialsSection />
    </main>
    <Footer />
    
    </>
  )
}
