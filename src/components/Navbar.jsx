import { NavLink } from 'react-router-dom';
import spacelineLogo from '../assets/images/WhiteLogo.png'; // spaceline logo path
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
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  // define menu items!
  const navItems = [
    { name: "Inicio", link: "/" },
    { name: "Sobre Nosotros", link: "/about" },
    { name: "Servicios", link: "/services" },
    { name: "Portafolio", link: "/portfolio" },
  ];

  return (
    <>
      {/* desktop */}
      <motion.div
        ref={ref}
        className={cn("fixed inset-x-0 top-5 z-40 w-full")}
      >
        <motion.div
          animate={{
            backdropFilter: visible ? "blur(10px)" : "none",
            boxShadow: visible
              ? "0 0 8px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 16px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
              : "none",
            width: visible ? "40%" : "100%",
            y: visible ? 20 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 50,
          }}
          style={{
            minWidth: "800px",
          }}
          className={cn(
            "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-4 py-2 lg:flex", "bg-transparent dark:bg-transparent"
          )}
        >
          <NavLink to="/" className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black">
            <img src={spacelineLogo} alt="Spaceline Logo" width={80} height={80} />
            {/* <span className="text-2xl text-black dark:text-white">Spaceline</span> */}
          </NavLink>

          <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-end space-x-2 text-lg font-urbanist text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2">
            {navItems.map((item, idx) => (
              <NavLink
                key={`link-${idx}`}
                to={item.link}
                className={({ isActive }) => 
                  cn(
                    "relative px-4 py-2 text-neutral-600 dark:text-neutral-300",
                    isActive && "font-bold text-black dark:text-white"
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </motion.div>
      </motion.div>




      {/* mobile */}
      <motion.div
        animate={{
          backdropFilter: visible ? "blur(10px)" : "none",
          boxShadow: visible
            ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
            : "none",
          width: visible ? "90%" : "100%",
          paddingRight: visible ? "12px" : "0px",
          paddingLeft: visible ? "12px" : "0px",
          borderRadius: visible ? "4px" : "2rem",
          y: visible ? 20 : 0,
          backgroundColor: 'rgba(0, 0, 0, 0)'
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 50,
        }}
        className={cn(
          "fixed z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden", "bg-transparent dark:bg-transparent"
        )}
      >
        <div className="flex w-full flex-row items-center justify-between">
          <NavLink to="/" className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black">
            <img src={spacelineLogo} alt="Spaceline Logo" width={30} height={30} />
            <span className="font-medium text-black dark:text-white">Spaceline</span>
          </NavLink>

          {isMobileMenuOpen ? (
            <IconX 
              className="text-black dark:text-white" 
              onClick={() => setIsMobileMenuOpen(false)} 
            />
          ) : (
            <IconMenu2 
              className="text-black dark:text-white" 
              onClick={() => setIsMobileMenuOpen(true)} 
            />
          )}
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950"
            >
              {navItems.map((item, idx) => (
                <NavLink
                  key={`mobile-link-${idx}`}
                  to={item.link}
                  className={({ isActive }) => 
                    cn(
                      "w-full px-4 py-2 text-neutral-600 dark:text-neutral-300",
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