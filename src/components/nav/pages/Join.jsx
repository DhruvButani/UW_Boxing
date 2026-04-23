import { useState } from "react";
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";

const LEVELS = ["Beginner", "Intermediate", "Competitive"];

function validate(fields) {
    const errs = {};
    if (!fields.email.endsWith("@wisc.edu"))
        errs.email = "Must be a valid @wisc.edu address.";
    if (!fields.firstName.trim()) errs.firstName = "First name is required.";
    if (!fields.lastName.trim()) errs.lastName = "Last name is required.";
    if (!fields.year) errs.year = "Please select your year.";
    if (fields.levels.length === 0) errs.levels = "Select at least one interest level.";
    return errs;
}

export default function Join() {
    const [fields, setFields] = useState({
        firstName: "", lastName: "", email: "", year: "",
        levels: [], comments: ""
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const set = (key, val) => setFields(f => ({ ...f, [key]: val }));

    const toggleArr = (key, val) =>
        set(key, fields[key].includes(val)
            ? fields[key].filter(v => v !== val)
            : [...fields[key], val]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate(fields);
        setErrors(errs);
        if (Object.keys(errs).length === 0) setSubmitted(true);
    };

    if (submitted) return (
        <div className="page-content">
            <div className="join-success-wrap">
                <div className="join-success-card">
                    <h2>Thank you!</h2>
                    <button className="btn btn-outline-danger mt-3" onClick={() => { setSubmitted(false); setFields({ firstName: "", lastName: "", email: "", year: "", levels: [], comments: "" }); }}>
                        Submit Another
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="page-content">
            <div className="page-header-band">
                <h1 className="page-band-title">Join the Club</h1>
            </div>

            <Container className="join-form-wrap">
                <Form noValidate onSubmit={handleSubmit} className="join-form-card">

                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    className="form-ctrl-dark"
                                    placeholder="Jane"
                                    value={fields.firstName}
                                    onChange={e => set("firstName", e.target.value)}
                                    isInvalid={!!errors.firstName}
                                />
                                <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    className="form-ctrl-dark"
                                    placeholder="Badger"
                                    value={fields.lastName}
                                    onChange={e => set("lastName", e.target.value)}
                                    isInvalid={!!errors.lastName}
                                />
                                <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col md={8}>
                            <Form.Group>
                                <Form.Label>UW–Madison Email</Form.Label>
                                <Form.Control
                                    className="form-ctrl-dark"
                                    type="email"
                                    placeholder="badger@wisc.edu"
                                    value={fields.email}
                                    onChange={e => set("email", e.target.value)}
                                    isInvalid={!!errors.email}
                                />
                                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Year</Form.Label>
                                <Form.Select
                                    className="form-ctrl-dark"
                                    value={fields.year}
                                    onChange={e => set("year", e.target.value)}
                                    isInvalid={!!errors.year}
                                >
                                    <option value="">Select...</option>
                                    <option>Freshman</option>
                                    <option>Sophomore</option>
                                    <option>Junior</option>
                                    <option>Senior</option>
                                    <option>Graduate</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">{errors.year}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3">
                        <Form.Label>Level of Interest <span className="form-hint">(select all that apply)</span></Form.Label>
                        <div className={`toggle-group ${errors.levels ? "toggle-group-err" : ""}`}>
                            {LEVELS.map(lvl => (
                                <button
                                    type="button"
                                    key={lvl}
                                    className={`toggle-pill ${fields.levels.includes(lvl) ? "active" : ""}`}
                                    onClick={() => toggleArr("levels", lvl)}
                                >
                                    {lvl}
                                </button>
                            ))}
                        </div>
                        {errors.levels && <div className="toggle-feedback">{errors.levels}</div>}
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label>Comments or Questions <span className="form-hint">(optional)</span></Form.Label>
                        <Form.Control
                            as="textarea"
                            className="form-ctrl-dark"
                            rows={3}
                            placeholder="Any prior experience, injuries to note, questions for the team..."
                            value={fields.comments}
                            onChange={e => set("comments", e.target.value)}
                        />
                    </Form.Group>

                    <Button type="submit" className="join-submit-btn">
                        Submit Interest Form
                    </Button>
                </Form>
            </Container>
        </div>
    );
}
