import './styles/main.css';
import './styles/reset.css';

import AboutUs from "../components/AboutUs";
import Serving from "../components/Serving";
import Hero from "../components/Hero";
import Header from "../components/Header";

function App() {
  return (
      <>
        <Header/>
        <Hero/>
        <AboutUs/>
        <Serving/>
      </>
  );
}

export default App;
