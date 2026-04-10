import { Outlet } from "react-router";
import BoxingNavbar from "./nav/BoxingNavbar";
import SlideshowBg from "./SlideshowBg";

export default function BoxingClub() {
    return (
        <div>
            <SlideshowBg />
            <BoxingNavbar />
            <Outlet />
        </div>
    );
}
