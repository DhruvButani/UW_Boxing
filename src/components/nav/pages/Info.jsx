const officers = [
    { name: "Dhruv Butani",     role: "President & Intermediate Captain" },
    { name: "Collin Harvey",    role: "Vice President & Intermediate Captain" },
    { name: "Marissa Post",     role: "Treasurer" },
    { name: "Emilio Fernandez", role: "Social Media Chair & Intermediate Captain" },
    { name: "Joe Smukowski",    role: "Secretary" },
    { name: "Amparo Campos",    role: "Community Service Chair" },
    { name: "Reuben Guzik",     role: "Safety Officer & Intermediate Captain" },
    { name: "Jimmy Angelos",    role: "Intermediate Captain & Beginner Instructor" },
    { name: "Julio Garcia",     role: "Head Coach" },
];

export default function Info() {
    return (
        <div className="schedule-layout">
            <div className="schedule-slideshow-area" />
            <div className="schedule-panel">
                <h1 className="panel-title">Club Officers</h1>
                <div className="panel-scroll-list">
                    {officers.map((o) => (
                        <div key={o.name} className="schedule-level-card">
                            <div className="slc-title">{o.name}</div>
                            <div className="slc-location">{o.role}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
