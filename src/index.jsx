import ReactDOM from "react-dom";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Home from "./routes/home.jsx";
import Resources from "./routes/resources.jsx";
import About from "./routes/about.jsx";
import Programs from "./routes/programs.jsx";
import History from "./routes/history.jsx";

import "./index.css";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/",
        element: <Resources />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/programs" element={<Programs />}></Route>
                <Route path="/history" element={<History />}></Route>
                <Route path="/resources" element={<Resources />}></Route>
                <Route path="*" element={<p>Path not resolved</p>} />
            </Routes>
            <Footer></Footer>
        </BrowserRouter>
    </React.StrictMode>
);
