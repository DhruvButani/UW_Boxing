const levels = [
    {
        title: "Beginners",
        location: "Nicholas Recreation Center · Spark Studio, 3rd Floor",
        sessions: [
            { day: "Tuesdays",  time: "7:30 – 9:30 PM" },
            { day: "Thursdays", time: "9:00 – 10:30 PM" },
        ],
    },
    {
        title: "Intermediates",
        location: "Nicholas Recreation Center · Spark Studio, 3rd Floor",
        sessions: [
            { day: "Mondays",    time: "7:15 – 9:00 PM" },
            { day: "Wednesdays", time: "10:00 – 11:45 PM" },
        ],
    },
    {
        title: "Competitive",
        location: "Twisted Fitness Gym · Canvas Club Boxing",
        sessions: [
            { day: "Saturdays", time: "9:30 – 11:00 AM (Twisted Fitness)" },
            { day: "Sundays",   time: "10:00 – 11:00 AM (alternates Twisted / Canvas)" },
        ],
    },
];

export default function Schedule() {
    return (
        <div className="page-content">
            <div className="page-header-band">
                <h1 className="page-band-title">Weekly Schedule</h1>
            </div>

            <div className="schedule-section">
                <div className="schedule-cards">
                    {levels.map(lvl => (
                        <div key={lvl.title} className="schedule-level-card">
                            <div className="slc-title">{lvl.title}</div>
                            <div className="slc-location">{lvl.location}</div>
                            {lvl.sessions.map(s => (
                                <div key={s.day} className="slc-session">
                                    <span className="slc-day">{s.day}</span>
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
