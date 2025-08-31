"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Header from "../../components/dashboard/header";
import Footer from "../../components/dashboard/footer";
// import Pricing from "../../components/dashboard/pricingCardsTemplate";
// import Services from "../../components/dashboard/services";
import TextHero from "../../components/dashboard/textHero";
import AboutUs from "../../components/dashboard/aboutUs";
import ImagenPrincipal from "@/assets/ImagenPrincipal.jpg";

export default function HomeMain() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const packagesRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (section: string) => {
    const sectionRefs: Record<
      string,
      React.RefObject<HTMLDivElement | null>
    > = {
      about: aboutRef,
      packages: packagesRef,
      services: servicesRef,
    };

    const targetRef = sectionRefs[section];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#021024] via-[#052659] to-[#052659] h-full w-full">
      <div className="w-full h-dvh">
        <div className="absolute inset-0  bg-cover md:bg-fixed bg-center bg-no-repeat opacity-70">
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
          <Image
            src={ImagenPrincipal}
            alt="Imagen Principal"
            fill
            priority
            className="object-cover opacity-70"
            style={{ zIndex: 0 }}
          />
        </div>

        <div className="relative">
          <Header scrollToSection={scrollToSection} />
          <TextHero />
        </div>
      </div>

      <div ref={aboutRef}>
        <AboutUs />
      </div>
      {/* 
      <div ref={servicesRef}>
        <Services />
      </div>

      <div ref={packagesRef}>
        <Pricing />
      </div> */}

      <Footer />
    </div>
  );
}
