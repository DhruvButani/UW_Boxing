import { useState, useEffect, useCallback } from "react";
import { Container } from "react-bootstrap";

const images = Array.from({ length: 13 }, (_, i) => `./images/photo${i + 1}.png`);

export default function Gallery() {
    const [selected, setSelected] = useState(null);

    const close = () => setSelected(null);
    const prev = useCallback(() => setSelected(i => (i - 1 + images.length) % images.length), []);
    const next = useCallback(() => setSelected(i => (i + 1) % images.length), []);

    useEffect(() => {
        if (selected === null) return;
        const handler = (e) => {
            if (e.key === "Escape") close();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [selected, prev, next]);

    return (
        <div className="page-content">
            <div className="page-header-band">
                <h1 className="page-band-title">Photo Gallery</h1>
            </div>

            <Container fluid className="gallery-grid-wrap">
                <div className="gallery-grid">
                    {images.map((src, i) => (
                        <button
                            key={i}
                            className="gallery-thumb"
                            onClick={() => setSelected(i)}
                            aria-label={`Open photo ${i + 1}`}
                        >
                            <img src={src} alt={`Club photo ${i + 1}`} loading="lazy" />
                            <div className="gallery-thumb-overlay">
                                <span className="gallery-thumb-icon">⤢</span>
                            </div>
                        </button>
                    ))}
                </div>
            </Container>

            {selected !== null && (
                <div className="lightbox-backdrop" onClick={close}>
                    <button className="lightbox-close" onClick={close} aria-label="Close">✕</button>

                    <button
                        className="lightbox-nav lightbox-prev"
                        onClick={(e) => { e.stopPropagation(); prev(); }}
                        aria-label="Previous"
                    >‹</button>

                    <div className="lightbox-img-wrap" onClick={(e) => e.stopPropagation()}>
                        <img
                            key={selected}
                            src={images[selected]}
                            alt={`Club photo ${selected + 1}`}
                            className="lightbox-img"
                        />
                        <p className="lightbox-counter">{selected + 1} / {images.length}</p>
                    </div>

                    <button
                        className="lightbox-nav lightbox-next"
                        onClick={(e) => { e.stopPropagation(); next(); }}
                        aria-label="Next"
                    >›</button>
                </div>
            )}
        </div>
    );
}
