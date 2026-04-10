const levels = [
    {
        level: "Beginners",
        location: "Nicholas Recreation Center, Spark Studio 3rd Floor",
        sessions: [
            { day: "Tuesday", time: "7:30 – 9:30 PM" },
            { day: "Thursday", time: "9:00 – 10:30 PM" },
        ],
    },
    {
        level: "Intermediates",
        location: "Nicholas Recreation Center, Spark Studio 3rd Floor",
        sessions: [
            { day: "Monday", time: "7:15 – 9:00 PM" },
            { day: "Wednesday", time: "10:00 – 11:45 PM" },
        ],
    },
    {
        level: "Competitive",
        location: "Twisted Fitness Gym / Canvas Club Boxing",
        sessions: [
            { day: "Saturday", time: "9:30 – 11:00 AM (Twisted Fitness)" },
            { day: "Sunday", time: "10:00 – 11:00 AM (Alternates Twisted & Canvas)" },
        ],
    },
];

export default function Schedule() {
    return (
        <div className="schedule-layout">
            <div className="schedule-slideshow-area" />
            <div className="schedule-panel">
                <h1 className="panel-title">Class Schedule</h1>
                <p className="panel-note">
                    Times and locations subject to change — check Instagram or Discord ahead of time.
                </p>
                <div className="schedule-cards">
                    {levels.map((lvl) => (
                        <div key={lvl.level} className="schedule-level-card">
                            <div className="slc-title">{lvl.level}</div>
                            <div className="slc-location">{lvl.location}</div>
                            {lvl.sessions.map((s) => (
                                <div key={s.day} className="slc-session">
                                    <span className="slc-day">{s.day}:</span>
                                    <span className="slc-time">{s.time}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
