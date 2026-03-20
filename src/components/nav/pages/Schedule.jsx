import { Card, Col, Container, Row } from "react-bootstrap";

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
            { day: "Sunday", time: "10:00 – 11:00 AM (Alternates between Twisted & Canvas per week)" },
        ],
    },
];

export default function Schedule() {
    return <div>
        <h1 className="section-title">Class Schedule</h1>
        <p className="text-muted mb-4">
            Please note that practice times and locations are subject to change.
            Changes will be reflected on the club instagram story or discord ahead of time.
        </p>

        <Container fluid>
            <Row>
                {levels.map((lvl) => (
                    <Col key={lvl.level} xs={12} md={4} className="mb-3">
                        <Card className="schedule-card h-100">
                            <Card.Body>
                                <Card.Title>{lvl.level}</Card.Title>
                                <p className="text-muted small mb-2">{lvl.location}</p>
                                {lvl.sessions.map((s) => (
                                    <div key={s.day} className="mb-1">
                                        <strong>{s.day}:</strong> {s.time}
                                    </div>
                                ))}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    </div>
}
