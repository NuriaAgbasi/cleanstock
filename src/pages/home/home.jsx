import ReusableLink from "../..//components/rusablelink";
import "./home.css";
import Image from "../../image/image1.jpeg";
import { useState } from "react";
import AddStock from "../addStock/addStock";
import Footer from "./footer";
import Typewriter from "./typeWriter";

const Home = () => {
  const [clicked, SetClicked] = useState(false);
  const handleOnclick = () => {
    SetClicked(true);
  };
  return (
    <ReusableLink>
      {clicked ? (
        <AddStock />
      ) : (
        <div id="bgcol" className="area">
          <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div className="flex items-center justify-between min-h-screen">
            <div className="w-1/2 ml-16">
              <div id="font" className="text-xl font-bold mb-2">
                <h1 className=" pr-9">
                  <Typewriter />
                </h1>
                <h1 className="mt-2 text-3xl font-bold leading-7 bg-blue w-fit rounded text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                  The best place to Improve your bussiness
                </h1>
                <p className="text-xl ml-40 leading-7 font-semibold text-gray-900 sm:truncate sm:text-xl sm:tracking-tight rounded">
                  Input your stocks
                </p>
              </div>
              <div class="relative inline-flex ml-40 group">
                <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <a
                  onClick={handleOnclick}
                  title="Input"
                  class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  Input now
                </a>
              </div>
            </div>
            <div className="w-1/3 mt-14 mr-20 flex items-center justify-center">
              <img src={Image} alt="people" className="w-3/4 rounded-full" />
            </div>
          </div>
          <Footer />
        </div>
      )}
    </ReusableLink>
  );
};

export default Home;