import React from "react";
import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
    return (
        <>
            <h2 className="ir_so">컨텐츠 영역</h2>
            <section id="blog-type" className="section center type">
                <div className="container">
                    <div className="Icontainer">
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    </div>
                </div>
            </section>
        </>
    );
}
