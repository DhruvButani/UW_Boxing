import { useState, useEffect } from "react";

const images = Array.from({ length: 13 }, (_, i) => `./images/photo${i + 1}.png`);

export default function SlideshowBg() {
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
        <div className="slideshow-fixed">
            <div
                className={`slideshow-bg ${zoomed ? "slideshow-zoomed" : ""}`}
                style={{ backgroundImage: `url('${images[current]}')` }}
            />
            <div className="slideshow-overlay" />
        </div>
    );
}
