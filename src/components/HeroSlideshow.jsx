import { useState, useEffect } from "react";

const images = [
    "./images/photo1.png",
    "./images/photo2.png",
    "./images/photo3.png",
    "./images/photo4.png",
    "./images/photo5.png",
    "./images/photo6.png",
    "./images/photo7.png",
    "./images/photo8.png",
    "./images/photo9.png",
    "./images/photo10.png",
    "./images/photo11.png",
    "./images/photo12.png",
    "./images/photo13.png",
];

export default function HeroSlideshow({ title, subtitle }) {
    const [current, setCurrent] = useState(0);
    const [zoomed, setZoomed] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setZoomed(false);
            setTimeout(() => {
                setCurrent(prev => (prev + 1) % images.length);
                setZoomed(true);
            }, 800);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hero-slideshow">
            <div
                className={`hero-bg ${zoomed ? "hero-zoomed" : ""}`}
                style={{ backgroundImage: `url('${images[current]}')` }}
            />
            <div className="hero-overlay" />
            <div className="hero-content">
                <h1 className="hero-title">{title}</h1>
                {subtitle && <p className="hero-subtitle">{subtitle}</p>}
            </div>
        </div>
    );
}
