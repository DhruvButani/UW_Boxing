const links = [
    {
        label: "Instagram",
        handle: "@boxinguw",
        description: "Match recaps, event announcements, and behind-the-scenes from the gym.",
        href: "https://www.instagram.com/boxinguw/",
        cta: "Follow us",
        accent: "#e1306c",
    },
    {
        label: "Discord",
        handle: "Community Server",
        description: "The main hub for schedule updates, session reminders, and club chat. Check here before every session.",
        href: "https://discord.gg/TRYPBM8pyX",
        cta: "Join the server",
        accent: "#5865f2",
    },
    {
        label: "WIN Website",
        handle: "win.wisc.edu",
        description: "Our official UW–Madison organization page through the Wisconsin Involvement Network.",
        href: "https://win.wisc.edu/organization/boxing",
        cta: "View page",
        accent: "#c5050c",
    },
    {
        label: "DoSportsEasy",
        handle: "wisc.dserec.com",
        description: "Register for the club and pay your semester dues here before attending your first session.",
        href: "https://wisc.dserec.com/online/clubsports",
        cta: "Register & pay dues",
        accent: "#c5050c",
    },
    {
        label: "Email Us",
        handle: "boxingclubuwmadison@gmail.com",
        description: "Questions about joining, scheduling, or anything else? Reach out directly to the club officers.",
        href: "mailto:boxingclubuwmadison@gmail.com",
        cta: "Send an email",
        accent: "#c5050c",
    },
];

export default function Contact() {
    return (
        <div className="page-content">
            <div className="page-header-band">
                <h1 className="page-band-title">Connect With Us</h1>
            </div>

            <div className="connect-section">
                <div className="connect-grid">
                    {links.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            target={item.href.startsWith("mailto") ? undefined : "_blank"}
                            rel="noopener noreferrer"
                            className="connect-card"
                            style={{ "--card-accent": item.accent }}
                        >
                            <div className="connect-card-top">
                                <div>
                                    <div className="connect-label">{item.label}</div>
                                    <div className="connect-handle">{item.handle}</div>
                                </div>
                                <span className="connect-arrow">↗</span>
                            </div>
                            <p className="connect-description">{item.description}</p>
                            <div className="connect-cta">{item.cta} →</div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
