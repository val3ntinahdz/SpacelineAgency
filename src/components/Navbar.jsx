import { NavLink } from 'react-router-dom';
import GradientLogo from '../assets/images/GradientLogo.png';
import WhiteLogo from '../assets/images/WhiteLogo.png';
import { cn } from '../lib/utils';
import { IconMenu2, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useRef } from "react";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 100);
  });

  const navItems = [
    { name: "Inicio", link: "/" },
    { name: "Sobre Nosotros", link: "/about" },
    { name: "Servicios", link: "/services" },
    { name: "Portafolio", link: "/portfolio" },
  ];

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <motion.div
      ref={ref}
      className="fixed inset-x-0 top-5 z-40 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
    <motion.div
      animate={{
        backdropFilter: "blur(12px)",
        boxShadow: visible
          ? "0 4px 12px rgba(0,0,0,0.05)"
          : "none",
        backgroundColor: visible
          ? "rgba(255,255,255,0.7)"
          : "transparent",
        width: visible ? "40%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{ minWidth: "800px" }}
      className={cn(
        "relative z-[60] mx-auto hidden max-w-7xl items-center justify-between rounded-full px-6 py-3 lg:flex transition-all duration-300"
      )}
    >
      {/* LOGO (cambia según scroll) */}
      <NavLink
        to="/"
        className={cn(
          "flex items-center space-x-2 px-2 py-1 text-sm font-normal transition-all duration-300",
          visible ? "text-black" : "text-white"
        )}
      >
        <img
          src={visible ? GradientLogo : WhiteLogo}
          alt="Spaceline Logo"
          width={60}
          height={60}
          className="transition-all duration-300"
        />
      </NavLink>

      {/* nav links! (cambia color según scroll) */}
      <div className={cn(
        "flex items-center space-x-6 text-lg font-jakarta transition-all duration-300",
        visible ? "text-neutral-800" : "text-white"
      )}>
        {navItems.map((item, idx) => (
          <NavLink
            key={`link-${idx}`}
            to={item.link}
            className={({ isActive }) =>
              cn(
                "relative px-3 py-2 transition-colors duration-300",
                visible
                  ? "hover:text-black"
                  : "hover:text-zinc-100",
                isActive && (visible
                  ? "font-semibold text-black after:bg-black"
                  : "font-semibold text-white after:bg-white"),
                "after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-6 after:rounded-full"
              )
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </motion.div>
  </motion.div>

      {/* MOBILE NAVBAR */}
      <motion.div
        animate={{
          backdropFilter: visible ? "blur(10px)" : "none",
          boxShadow: visible
            ? "0 0 24px rgba(34,42,53,0.06), 0 1px 1px rgba(0,0,0,0.05)"
            : "none",
          backgroundColor: visible
            ? "rgba(255,255,255,0.6)"
            : "transparent",
          width: visible ? "90%" : "100%",
          borderRadius: visible ? "1rem" : "2rem",
          y: visible ? 20 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 50,
        }}
        className={cn(
          "fixed z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-4 py-2 lg:hidden",
          "backdrop-blur-md transition-all duration-300 dark:bg-neutral-900/70"
        )}
      >
        {/* TOP ROW */}
        <div className="flex w-full flex-row items-center justify-between">
          <NavLink to="/" className="flex items-center space-x-2 px-2 py-1 text-sm font-jakarta text-black dark:text-white">
            <img src={visible ? GradientLogo : WhiteLogo} alt="Spaceline Logo" width={30} height={30} />
            <span className={visible ? "text-black" : "text-white"}>Spaceline</span>
          </NavLink>

          {isMobileMenuOpen ? (
            <IconX 
              className="text-black dark:text-white cursor-pointer" 
              onClick={() => setIsMobileMenuOpen(false)} 
            />
          ) : (
            <IconMenu2 
              className="text-black dark:text-white cursor-pointer" 
              onClick={() => setIsMobileMenuOpen(true)} 
            />
          )}
        </div>

        {/* DROPDOWN MENU */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start gap-4 rounded-xl bg-white px-6 py-8 shadow-lg dark:bg-neutral-950"
            >
              {navItems.map((item, idx) => (
                <NavLink
                  key={`mobile-link-${idx}`}
                  to={item.link}
                  className={({ isActive }) =>
                    cn(
                      "w-full px-4 py-2 text-base transition-colors duration-200 text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white",
                      isActive && "font-bold text-black dark:text-white"
                    )
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};
