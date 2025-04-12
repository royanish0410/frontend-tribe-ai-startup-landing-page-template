"use client";
import Image from "next/image";
import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import quantumLogo from "@/assets/logo-quantum.png";
import pulseLogo from "@/assets/logo-pulse.png";
import echologo from "@/assets/logo-echo.png";
import { motion } from "framer-motion";

const logos = [
  { src: acmeLogo, alt: "Acme logo" },
  { src: pulseLogo, alt: "Pulse logo" },
  { src: echologo, alt: "Echo logo" },
  { src: celestialLogo, alt: "Celestial logo" },
  { src: apexLogo, alt: "Apex logo" },
  { src: quantumLogo, alt: "Quantum logo" },
];

export const LogoTicker = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none">
            <h2>Trusted by top innovative teams</h2>
          </div>
          <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0" }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
              className="flex flex-none gap-14 pr-14 -translate-x-1/2"
            >
              {[...logos, ...logos].map((logo, index) => (
                <Image
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  height={24}
                  className="w-auto h-6"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
