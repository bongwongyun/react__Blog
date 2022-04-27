import React from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Side from "../../components/side/Side";
import Footer from "../../components/footer/Footer";
import "./home.css";

export default function Home() {
    return (
        <>
            <Header />
            <main id="main">
                <Posts />
                <Side />
            </main>
            <Footer />
        </>
    );
}
