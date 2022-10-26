import About from "./components/About/Index";
import Header from "./components/Header/Index";
import Results from "./components/Results/Index";
import Partners from "./components/Partners/Index";
import Services from "./components/Services/Index";
import Why from "./components/Why/Index";
import ForDrivers from "./components/ForDrivers/Index";
import Founder from "./components/Founder/Index";
import Contact from "./components/Contact/Index";
import Footer from "./components/Footer";

function App() {
  return new Date().getTime() < 1666802303317 ? (
    <div className="">
      <a
        href="tel:+1 (877) 747-5533"
        className="fixed bottom-6 right-6 lg:hidden shadow-xl cursor-pointer hover:scale-110 duration-150 w-16 z-[1000] h-16 rounded-full bg-orange flex items-center justify-center"
      >
        <img
          src="https://img.icons8.com/ios-glyphs/60/ffffff/phone--v1.png"
          className="w-8 h-8"
        />
      </a>
      <Header />
      <Results />
      <About />
      <Partners />
      <Services />
      <Why />
      <ForDrivers />
      <Founder />
      <Contact />
      <Footer />
    </div>
  ) : (
    "Timeout"
  );
}

export default App;
