import { Navigate, Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { TeamPage } from "../pages/TeamPage";
import { BlogPage } from "pages/BlogPage";
import { AboutPage } from "pages/AboutPage";
import { OrderPage } from "pages/OrderPage";

export const Routings = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/order" element={<Navigate to="/" />} />
                <Route path="/order/*" element={<OrderPage />} />
                <Route path="team" element={<TeamPage />} />
                <Route path="usefulInformation" element={<BlogPage />} />
                <Route path="about" element={<AboutPage />} />
            </Routes>
        </>
    );
};
