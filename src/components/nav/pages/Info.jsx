import { Card, Col, Container, Row } from "react-bootstrap";

const officers = [
    {
        name: "Default Name",
        role: "President",
        bio: "Default text",
    },
    {
        name: "Default Name",
        role: "Vice President",
        bio: "Default text",
    },
    {
        name: "Default Name",
        role: "Treasurer",
        bio: "Default text",
    },
    {
        name: "Default Name",
        role: "Head Coach",
        bio: "Default text",
    },
    {
        name: "Default Name",
        role: "Social Media Officer",
        bio: "Default text",
    },
    {
        name: "Default Name",
        role: "Beginners Practice Coach",
        bio: "Default text",
    },
];

export default function Info() {
    return <div>
        <h1 className="section-title">Club Info</h1>
        <Container fluid>
            <Row>
                {officers.map((officer, i) => (
                    <Col key={i} xs={12} sm={6} lg={4} className="mb-4">
                        <Card className="officer-card h-100">
                            <Card.Body>
                                <Card.Title>{officer.name}</Card.Title>
                                <Card.Subtitle className="mb-2">{officer.role}</Card.Subtitle>
                                <Card.Text className="text-muted">{officer.bio}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    </div>
}
