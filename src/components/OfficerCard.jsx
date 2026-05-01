export default function OfficerCard({ name, role, initials }) {
    return (
        <div className="officer-card-new">
            <div className="officer-avatar">{initials}</div>
            <div className="officer-info">
                <div className="officer-name-new">{name}</div>
                <div className="officer-role-new">{role}</div>
            </div>
        </div>
    );
}
