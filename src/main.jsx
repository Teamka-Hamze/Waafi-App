import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/header/app";
import HeroSection from "./components/hero-section/hero";
import Services from "./components/services/services";
import Coolor from "./components/color/color";
import Mobile from "./components/Mobile/mobile";
import Booking from "./components/Booking/booking";
import Payments from "./components/payments/payments";
import Online from "./components/online/online";
import Wallpaper from "./components/wallpaper/wallpaper";
import Down from "./components/download/down";
import Team from "./components/team/team";
import About from "./components/about/about";
import Cards from "./components/cards/Cards";
import Footer from "./components/footer/Footer";
// import FAQ from "./components/FAQ/faq";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <HeroSection />
    <Services />
    <Coolor />
    <Mobile />
    <Booking />
    <Payments />
    <Online />
    <Wallpaper />
    <Down />
    <Team />
    <About />
    <Cards />
    <Footer/>
  </StrictMode>
);
