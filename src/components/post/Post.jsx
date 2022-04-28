import React from "react";
import "./post.css";

export default function Post() {
    return (
        <>
            <div className="blog__inner">
                <div className="blog__cont">
                    <article className="blog">
                        <figure className="blog__header" aria-hidden="true">
                            <img src="https://source.unsplash.com/800x600/?nature,water" alt="" />
                        </figure>
                        <div className="blog__body">
                            <span className="blog__cate">javascript</span>
                            <div className="blog__title">???:응~ 떨어져봐~</div>
                            <div className="blog__desc">자살하면 그만이야~</div>
                            <div className="blog__info">
                                <span className="author">
                                    <a href="#">갑을병</a>
                                </span>
                                <span className="date">22-03-29</span>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
}
