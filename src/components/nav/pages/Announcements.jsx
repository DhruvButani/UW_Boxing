import AnnouncementCard from "../../AnnouncementCard";

const announcements = [
    {
        date: "2026-04-30",
        title: "Spring Season Ending",
        body: "The spring boxing club season will be ending Thursday, April 30th, 2026.",
    },
];

export default function Announcements() {
    const sorted = [...announcements].sort((a, b) => b.date.localeCompare(a.date));

    return (
        <div className="page-content">
            <div className="page-header-band">
                <h1 className="page-band-title">Announcements</h1>
            </div>

            <div className="announcements-section">
                <p className="announcements-intro">
                    Real time announcements will be posted here.
                </p>

                <div className="announcements-list">
                    {sorted.map(a => (
                        <AnnouncementCard
                            key={a.date + a.title}
                            date={a.date}
                            title={a.title}
                            body={a.body}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
