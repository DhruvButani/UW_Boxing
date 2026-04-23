const officers = [
    { name: "Dhruv Butani",     role: "President & Intermediate Captain",              initials: "DB" },
    { name: "Collin Harvey",    role: "Vice President & Intermediate Captain",         initials: "CH" },
    { name: "Marissa Post",     role: "Treasurer",                                    initials: "MP" },
    { name: "Emilio Fernandez", role: "Social Media Chair & Intermediate Captain",    initials: "EF" },
    { name: "Joe Smukowski",    role: "Secretary",                                    initials: "JS" },
    { name: "Amparo Campos",    role: "Community Service Chair",                      initials: "AC" },
    { name: "Reuben Guzik",     role: "Safety Officer & Intermediate Captain",        initials: "RG" },
    { name: "Jimmy Angelos",    role: "Intermediate Captain & Beginner Instructor",   initials: "JA" },
    { name: "Julio Garcia",     role: "Head Coach",                                   initials: "JG" },
];

export default function Info() {
    return (
        <div className="page-content">
            <div className="page-header-band">
                <h1 className="page-band-title">Club Officers</h1>
            </div>
            <div className="officers-section">
                <div className="officers-grid-new">
                    {officers.map((o) => (
                        <div key={o.name} className="officer-card-new">
                            <div className="officer-avatar">{o.initials}</div>
                            <div className="officer-info">
                                <div className="officer-name-new">{o.name}</div>
                                <div className="officer-role-new">{o.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
