import { Landing } from "./pages/landing"
import Video from "./components/video"
import Features from "./components/Features"
import Pricing from "./pages/pricing"
import Brand from "./components/Brand"
import Testimonial from "./components/testimonial"
import Subscription from "./components/subscription"
import FAQ from "./components/FAQ"
import Fotter from "./components/fotter"
import Hero from "./components/Hero"

function App() {

  return (
    <>
        
      <Landing />
      <Hero/>
      <Video />
      <Features/>
      <Brand />
      <Pricing/>
      <Testimonial/>
      <Subscription />
      <FAQ/>
      <Fotter/>
      
    </>
  )
}

export default App;
