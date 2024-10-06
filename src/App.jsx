import Nabvbar from "./component/Nabvbar";
import Hero from "./component/Hero.jsx"
import Footer from "./component/Footer.jsx";

export default function App() {
  return (
    <div>
      <div className="h-72">
        <Nabvbar />
      </div>
      <Hero />
      <Footer/>
    </div>
  )
}