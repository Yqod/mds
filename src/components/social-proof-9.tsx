"use client";

import { motion, useAnimationFrame, useMotionValue } from "motion/react";
import { useRef, useState } from "react";
import Image from "next/image";

const logits1 = [
  { name: "Kunde 1", src: "/demologos/1.png", url: "#" },
  { name: "Kunde 2", src: "/demologos/2.png", url: "#" },
  { name: "Kunde 3", src: "/demologos/3.png", url: "#" },
  { name: "Kunde 4", src: "/demologos/4.png", url: "#" },
  { name: "Kunde 5", src: "/demologos/5.png", url: "#" },
  { name: "Kunde 6", src: "/demologos/6.png", url: "#" },
];

const Marquee = ({
  items,
  speed = 20,
}: {
  items: (typeof logits1)[number][];
  speed?: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const stripRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  useAnimationFrame((_, delta) => {
    if (isHovered) return;
    const strip = stripRef.current;
    if (!strip) return;
    const halfWidth = strip.scrollWidth / 2;
    const next = x.get() - (speed * delta) / 1000;
    x.set(next <= -halfWidth ? next + halfWidth : next);
  });

  return (
    <div
      className="flex overflow-hidden w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        ref={stripRef}
        className="flex shrink-0 gap-12 sm:gap-20 items-center"
        style={{ x }}
      >
        {[...items, ...items].map((logo, idx) => (
          <a
            key={idx}
            href={logo.url}
            className="flex-none flex items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={160}
              height={80}
              className="h-20 w-auto object-contain grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export function SocialProof9() {
  return (
    <section className="py-24 bg-[#ffffff] text-ink overflow-hidden">
      <div className="mx-auto max-w-2xl text-center mb-16">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
          Zertifiziert und geprüft
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Von unabhängigen Stellen geprüft und zertifiziert
        </h2>
      </div>

      <div className="relative">
        <Marquee items={logits1} speed={20} />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-white to-transparent" />
      </div>
    </section>
  );
}
