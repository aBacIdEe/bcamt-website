import { Outlet, Link } from "react-router-dom";

import { StickyNavbar } from "./Navbar";

export default function Header() {
    return (
        <header>
            <StickyNavbar />
        </header>
    );
}