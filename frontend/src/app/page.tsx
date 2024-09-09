"use client";

import { About, Chances, Footer, Navbar, CarCom } from "@/components";
import { useRef } from "react";

export default function Home() {
  const introduction = useRef(null);
  const oppor = useRef(null);
  const getInTouch = useRef(null);

  const scrollToSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-black">
      <Navbar
        scrollToSection={scrollToSection}
        introduction={introduction}
        oppor={oppor}
        getInTouch={getInTouch}
      />
      <section ref={introduction}>
        <About />
      </section>
      <section ref={getInTouch}>
        <CarCom />
      </section>
      <section ref={oppor}>
        <Chances />
      </section>
      <Footer />
    </div>
  );
}
