'use client'

import { useEffect } from "react";
import Header from "./Header";
import InnerSlider from "./InnerSlider";
import Lenis from "lenis";

export default function Wishlist() {
  useEffect(() => {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <div className="fixed h-screen bg-[#a3a3a3] flex flex-col w-full">
      <Header />
      <InnerSlider />
    </div>
  );
}

