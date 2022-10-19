import MainSection from "../MainSection";
import Cards from "../Cards";
import MultiCards from "../multiCards/MultiCards";
import Text from '../Text'
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function Slider() {
  return (
    <div className="w-[63%]  mx-auto bg-gray">
      <Navbar/>
      <MainSection/>
      <Cards/>
      <MultiCards/>
      <Text/>
      <Footer/>
    </div>
  );
}

