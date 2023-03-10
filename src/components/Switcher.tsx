import { ReactComponent as Sun } from "../assets/svg/sun.svg";
import { ReactComponent as Moon } from "../assets/svg/moon.svg";
import { ReactComponent as Rocket } from "../assets/svg/rocket2.svg";
import useDarkMode from "../hooks/useDarkMode";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

const Switcher: React.FC = (): JSX.Element => {
  const { theme, toggle } = useDarkMode();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    theme === "dark" ? true : false
  );

  useEffect(() => {
    setIsDarkMode(theme === "dark" ? true : false);
    const root = window.document.documentElement;
    root.classList.remove(theme === "dark" ? "light" : "dark");
    root.classList.add(theme);
  }, [theme]);

  const variants: Record<string, Variants> = {
    theme: {
      animate: {
        rotateY: !isDarkMode ? 0 : 180,
      },
    },
    rocket: {
      init: {
        x: "-70vw",
        opacity: 0,
        originX: 1.6,
      },
      animate: {
        x: isDarkMode ? "0vw" : ["0vw", "0.8vw", "-70vw"],
        rotate: isDarkMode ? 0 : [0, 180, 180, 0],
        opacity: isDarkMode ? 1 : [1, 1, 0.3, 0],
        transition: {
          times: isDarkMode ? [] : [0, 0.3, 0.99, 1],
          duration: 2.5,
          delay: 3,
        },
      },
    },
  };
  return (
    <>
      <motion.button
        id="theme-toggle"
        variants={variants.theme}
        initial="init"
        animate="animate"
        className="m-6 flex justify-start w-36 cursor-pointer"
        onClick={() => {
          toggle();
        }}
      >
        <motion.div
          className="w-10 h10 m-1"
          variants={variants.rocket}
          initial="init"
          animate="animate"
        >
          <Rocket className="rotate-45  dark:fill-slate-200  " />
        </motion.div>
        {isDarkMode && (
          <Moon
            id="moon-icon"
            className=" fill-slate-200 w-8 h-8 m-2 stroke-0"
          />
        )}
        {!isDarkMode && (
          <Sun id="sun-icon" className=" fill-slate-800 w-8 h-8 m-2" />
        )}
      </motion.button>
    </>
  );
};
export default Switcher;
