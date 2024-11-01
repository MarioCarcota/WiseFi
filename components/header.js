"use client";

import { FiMenu, FiArrowUpRight, FiLogOut } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import { useAnimate, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
  return <GlassNavigation />;
};

const GlassNavigation = () => {
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [scope, animate] = useAnimate();
  const navRef = useRef(null);

  const handleMouseMove = ({ offsetX, offsetY, target }) => {
    // @ts-ignore
    const isNavElement = [...target.classList].includes("glass-nav");

    if (isNavElement) {
      setHovered(true);

      const top = offsetY + "px";
      const left = offsetX + "px";

      animate(scope.current, { top, left }, { duration: 0 });
    } else {
      setHovered(false);
    }
  };

  useEffect(() => {
    navRef.current?.addEventListener("mousemove", handleMouseMove);

    return () =>
      navRef.current?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <nav
      ref={navRef}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: hovered ? "none" : "auto",
      }}
      className="w-full glass-nav fixed left-0 right-0 top-0 z-20 mx-auto max-w-6xl overflow-hidden border-[1px] border-white/10 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur md:left-6 md:right-6 md:top-6 md:rounded-2xl"
    >
      <div className="glass-nav flex items-center justify-between px-5 py-5">
        <Cursor hovered={hovered} scope={scope} />

        <Links />

        <Logo />

        <Buttons setMenuOpen={setMenuOpen} />
      </div>

      <MobileMenu menuOpen={menuOpen} />
    </nav>
  );
};

const Cursor = ({ hovered, scope }) => {
  return (
    <motion.span
      initial={false}
      animate={{
        opacity: hovered ? 1 : 0,
        transform: `scale(${
          hovered ? 1 : 0
        }) translateX(-50%) translateY(-50%)`,
      }}
      transition={{ duration: 0.15 }}
      ref={scope}
      className="pointer-events-none absolute z-0 grid h-[50px] w-[50px] origin-[0px_0px] place-content-center rounded-full bg-gradient-to-br from-nero from-20% to-verdeScuro text-2xl"
    >
      <FiArrowUpRight className="text-crema" />
    </motion.span>
  );
};

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      src="/Logo_WiseFi.png"
      onClick={() => {
        router.push("/");
      }}
      height={200}
      width={200}
      className="cursor-pointer pr-14"
    />
  );
};

const Links = () => (
  <div className="hidden items-center gap-2 md:flex">
    <GlassLink text="Scopri la nostra nuova AI" />
  </div>
);

const GlassLink = ({ text }) => {
  return (
    <a
      href="/platform/"
      className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95"
    >
      <span className=" relative z-10 text-white/90 transition-colors group-hover:text-white">
        {text}
      </span>
      <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
    </a>
  );
};

const TextLink = ({ text }) => {
  return (
    <a
      href="/platform/"
      className="font-light text-bianco/90 transition-colors hover:text-bianco"
    >
      {text}
    </a>
  );
};

const Buttons = ({ setMenuOpen }) => {
  return (
    <div className="flex items-center gap-4">
      <a href={"/platform/"}>
        <button className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95">
          <span className="font-light relative z-10 text-bianco/90 transition-colors group-hover:text-bianco">
            Vai alla piattaforma
          </span>
          <span className="absolute inset-0 z-0 bg-gradient-to-br from-bianco/20 to-bianco/5 opacity-0 transition-opacity group-hover:opacity-100" />
        </button>
      </a>

      <button
        onClick={() => setMenuOpen((pv) => !pv)}
        className="ml-2 block scale-100 text-3xl text-white/90 transition-all hover:scale-105 hover:text-white active:scale-95 md:hidden"
      >
        <FiMenu />
      </button>
    </div>
  );
};

const MobileMenu = ({ menuOpen }) => {
  return (
    <motion.div
      initial={false}
      animate={{
        height: menuOpen ? "fit-content" : "0px",
      }}
      className="block overflow-hidden md:hidden"
    >
      <div className="flex items-center justify-between px-4 pb-4">
        <div className="flex items-center gap-4">
          <TextLink text="Scopri la nostra nuova AI!" />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
