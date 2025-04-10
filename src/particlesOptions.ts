// src/particlesOptions.ts

import type { ISourceOptions } from "@tsparticles/engine";

const particlesOptions: ISourceOptions = {
    fullScreen: { enable: true, zIndex: -3 },
    background: {
        color: { value: "#000000" }
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
            resize: { enable: true }
        },
        modes: {
            push: { quantity: 4 },
            repulse: { distance: 200, duration: 0.4 }
        }
    },
    particles: {
        color: { value: "#ffffff" },
        links: {
            color: "#ffffff",
            distance: 100,
            enable: true,
            opacity: 1,
            width: 1
        },
        collisions: { enable: false },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            outModes: { default: "out" }
        },
        number: {
            density: {
                enable: true,
                width: 1920,
                height: 1080,
            },
            limit: {
                mode: "delete",
                value: 0,
            },
            value: 250,
        },
        opacity: {
            value: 0.5
        },
        shape: {
            type: "circle"
        },
        size: {
            value: { min: 1, max: 3 }
        }
    },
    detectRetina: true
};

export default particlesOptions;
