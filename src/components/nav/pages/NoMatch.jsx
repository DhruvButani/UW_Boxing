import { Link } from "react-router";

export default function NoMatch() {
    return <div className="text-center mt-5">
        <h1 style={{ fontSize: '5rem', color: '#c5050c' }}>404</h1>
        <h2>Page Not Found</h2>
        <p className="text-muted">The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-danger mt-2">Back to Home</Link>
    </div>
}
