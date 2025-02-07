import { useEffect, useRef } from "react";
import "../styles/ParticleBackground.css";
import PropTypes from "prop-types";

function ParticleBackground() {
    const containerRef = useRef(null);

    useEffect(() => {
        const numParticles = 100; // Number of particles
        const container = containerRef.current;

        for (let i = 0; i < numParticles; i++) {
            const particle = document.createElement("div");
            particle.classList.add("particle");

            // Random size
            const size = Math.random() * 6 + 4; // Particles between 4px and 10px
            particle.style.width = ` ${size}px`;
            particle.style.height = ` ${size}px`;

            // Random position inside the container
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;

            // Random animation direction and speed
            const moveX = Math.random() * 200 - 100; // Move between -100px and 100px
            const moveY = Math.random() * 200 - 100;
            const duration = Math.random() * 10 + 5; // 5s to 15s duration

            particle.style.setProperty("--moveX", `${moveX}px`);
            particle.style.setProperty("--moveY", `${moveY}px`);
            particle.style.animationDuration = `${duration}s`;
            particle.style.animationDelay = `${Math.random() * 1}s`;

            container.appendChild(particle);
        }
    }, []);

    return (
        <div className="particle-container">
            <div className="particles" ref={containerRef}></div>
        </div>
    );
}

ParticleBackground.PropTypes = {
    children: PropTypes.node.isRequired,
};

export default ParticleBackground;
