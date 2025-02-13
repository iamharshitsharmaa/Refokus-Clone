import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Marquees from "./components/Marquees";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import LoadingPage from "./components/Loading";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or some async operation
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Set loading to false after 3 seconds
  }, []);

  return (
   <>
    
 {isLoading ? (
        <LoadingPage />
      ) : (
        <div className="bg-[#1C1C1C] h-screen w-screen">
      <Navbar />
      <Work />
      {/* <Stripes /> */}
      <Products />
      <Marquees />
      <Cards />
      <Footer />
    </div>
      )}
   </>
  );
};

export default App;
