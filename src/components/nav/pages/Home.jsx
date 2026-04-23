export default function Home() {
    return (
        <div className="home-page">
            <div className="home-hero">
                <div className="home-hero-content">
                    <p className="home-eyebrow">UW–Madison</p>
                    <h1 className="hero-title">Wisconsin Boxing Club</h1>
                </div>
            </div>

            <div className="about-section">
                <h2 className="section-title">About the Club</h2>
                <p>
                    We are the only boxing-focused organization on campus, welcoming any UW-Madison student!
                    Don't be worried if you have no prior boxing experience — our beginner's classes are
                    entirely designed for people without any prior experience. For those with experience,
                    we offer an intermediate level with sparring opportunities and a competitive traveling
                    team to compete in scored matches against universities.
                </p>
                <p>
                    No one is ever forced to fight, hit someone, or get hit if they don't want to.
                    Participation in competition or sparring is entirely voluntary.{" "}
                    <strong className="about-highlight">NO EXPERIENCE IS REQUIRED TO JOIN.</strong>
                </p>
            </div>
        </div>
    );
}
