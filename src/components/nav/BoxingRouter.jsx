import { HashRouter, Route, Routes } from "react-router";

import BoxingClub from "../BoxingClub";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Info from "./pages/Info";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";

export default function BoxingRouter() {
    return <HashRouter>
        <Routes>
            <Route path="/" element={<BoxingClub />}>
                <Route index element={<Home />} />
                <Route path="schedule" element={<Schedule />} />
                <Route path="info" element={<Info />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NoMatch />} />
            </Route>
        </Routes>
    </HashRouter>
}
