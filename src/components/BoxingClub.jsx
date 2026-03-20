import { Outlet } from "react-router";
import BoxingNavbar from "./nav/BoxingNavbar";

export default function BoxingClub() {
    return <div>
        <BoxingNavbar />
        <div style={{ margin: "1.5rem" }}>
            <Outlet />
        </div>
    </div>
}
