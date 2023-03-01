import useDarkMode from "../../hooks/useDarkMode";
import ParticlesDarkBackground from "./ParticlesDarkBackground";
import ParticlesLightBackground from "./ParticlesLightBackground";

const ParticlesBackgorund = () => {
    const {theme} = useDarkMode();
    return (
      <div>
        {theme === "dark" ? (
          <ParticlesDarkBackground />
        ) : (
          <ParticlesLightBackground />
        )}
      </div>
    );
}
 
export default ParticlesBackgorund;