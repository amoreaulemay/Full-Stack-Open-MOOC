import { render } from "preact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "./app";
import Country from "./country";
import "./index.css";

render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="country/:country" element={<Country />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById("app") as HTMLElement
);
