import { Outlet } from "react-router";
import BoxingNavbar from "./nav/BoxingNavbar";

export default function BoxingClub() {
    return (
        <div className="app-shell">
            <BoxingNavbar />
            <main className="app-main">
                <Outlet />
            </main>
        </div>
    );
}
