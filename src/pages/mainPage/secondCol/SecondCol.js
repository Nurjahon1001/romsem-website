import MainSection from "../MainSection";
import SecondGroupCards from "../SecondGroupCards";
import MultiCards from "../multiCards/MultiCards";
import Text from '../Text'
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function Slider() {
  return (
    <div className="2xl:w-[70%] sm:w-[63%] w-[100%] mx-auto bg-gray">
      <Navbar/>
      <MainSection/>
      <SecondGroupCards/>
      <MultiCards/>
      <Text/>
      <Footer/>
    </div>
  );
}

