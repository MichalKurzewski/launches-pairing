import { useCallback, useMemo } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import { useState } from "react";
import type {
  Container,
  Engine,
  RecursivePartial,
  IOptions,
} from "tsparticles-engine";

const particlesDarkConfig: RecursivePartial<IOptions> = {
  background: {
    color: {
      value: "#1e293b",
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "grab",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 250,
        line_linked: {
          opacity: 0.2,
        },
      },
      push: {
        quantity: 1,
      },
      repulse: {
        distance: 160,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#f1f5f9",
    },
    links: {
      color: "#f1f5f9",
      distance: 150,
      enable: true,
      opacity: 0.1,
      width: 0.5,
    },
    collisions: {
      enable: false,
    },
    move: {
      direction: "right",
      enable: true,
      outModes: {
        default: "out",
      },
      random: false,
      speed: 0.4,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 2000,
      },
      value: 180,
    },
    opacity: {
      value: 0.7,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0,
        sync: false,
      },
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 0, max: 5 },
    },
  },
  detectRetina: true,
  // background: {
  //   image: "url('https://particles.js.org/images/background3.jpg')",
  // },
};
const ParticlesDarkBackground = () => {
  const [particlesContainer, setParticlesContainer] = useState<
    Container | undefined
  >();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await setParticlesContainer(container);
    },
    []
  );

  return useMemo(
    () => (
      <Particles
        init={particlesInit}
        id="tsparticles"
        loaded={particlesLoaded}
        options={particlesDarkConfig}
      />
    ),
    []
  );
};
export default ParticlesDarkBackground;
