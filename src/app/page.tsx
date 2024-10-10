import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Mainbody from "./components/Mainbody";



export default function Home() {
  return (
    <div>
      <Navbar/>
      <Mainbody/>
      <Footer/>
    </div>

  );
}
