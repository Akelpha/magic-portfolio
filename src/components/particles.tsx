"use client"

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import particlesOptions from "@/particlesOptions";

export default function Particlesjs() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => setInit(true));
    }, []);

    const particlesLoaded = (container: any) => {
        console.log(container);
    };

    return init ? (
        <Particles options={particlesOptions} />
    ) : null;
}
