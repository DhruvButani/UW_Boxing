const links = [
    { label: "Instagram",    description: "@boxinguw",                     href: "https://www.instagram.com/boxinguw/" },
    { label: "Discord",      description: "Join our community server",     href: "https://discord.gg/TRYPBM8pyX" },
    { label: "WIN Website",  description: "UW–Madison organization page",  href: "https://win.wisc.edu/organization/boxing" },
    { label: "DoSportsEasy", description: "Register & pay dues",           href: "https://wisc.dserec.com/online/clubsports" },
    { label: "Email Us",     description: "boxingclubuwmadison@gmail.com", href: "mailto:boxingclubuwmadison@gmail.com" },
];

export default function Contact() {
    return (
        <div className="schedule-layout">
            <div className="schedule-slideshow-area" />
            <div className="schedule-panel">
                <h1 className="panel-title">Contact Us</h1>
                <div className="panel-scroll-list">
                    {links.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            target={item.href.startsWith("mailto") ? undefined : "_blank"}
                            rel="noopener noreferrer"
                            className="schedule-level-card contact-link-card"
                        >
                            <div className="slc-title">{item.label}</div>
                            <div className="slc-location">{item.description}</div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
