import React from "react";
import Posts from "../../components/posts/Posts";
import Side from "../../components/side/Side";
import "./home.css";
import "../../components/css/common.css";
import "../../components/css/reset.css"

export default function Home() {
    return (
        <>
            <main id="contents">
                <Posts />
                <Side />
            </main>
        </>
    );
}
