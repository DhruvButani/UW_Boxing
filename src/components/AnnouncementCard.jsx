function formatDate(iso) {
    return new Date(iso).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export default function AnnouncementCard({ title, body, date }) {
    return (
        <article className="announcement-card">
            <time className="announcement-date" dateTime={date}>
                {formatDate(date)}
            </time>
            <h2 className="announcement-title">{title}</h2>
            <p className="announcement-body">{body}</p>
        </article>
    );
}
