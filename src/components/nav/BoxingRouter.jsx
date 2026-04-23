import { HashRouter, Route, Routes } from "react-router";

import BoxingClub from "../BoxingClub";
import Home     from "./pages/Home";
import Schedule from "./pages/Schedule";
import Info     from "./pages/Info";
import Contact  from "./pages/Contact";
import Gallery  from "./pages/Gallery";
import Join     from "./pages/Join";

export default function BoxingRouter() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<BoxingClub />}>
                    <Route index           element={<Home />}     />
                    <Route path="schedule" element={<Schedule />} />
                    <Route path="info"     element={<Info />}     />
                    <Route path="contact"  element={<Contact />}  />
                    <Route path="gallery"  element={<Gallery />}  />
                    <Route path="join"     element={<Join />}     />
                </Route>
            </Routes>
        </HashRouter>
    );
}
