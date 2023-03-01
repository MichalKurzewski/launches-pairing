import useDarkMode from "../../hooks/useDarkMode";
import ParticlesDarkBackground from "./ParticlesDarkBackground";
import ParticlesLightBackground from "./ParticlesLightBackground";

const ParticlesBackgorund = () => {
  const { theme } = useDarkMode();
  return (
    <div className=" fixed -z-10">
      {theme === "dark" ? (
        <ParticlesDarkBackground />
      ) : (
        <ParticlesLightBackground />
      )}
    </div>
  );
};

export default ParticlesBackgorund;
