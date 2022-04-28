import React from "react";
import "./header.css";
import "../css/common.css";
import "../css/reset.css";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header id="header">
                <h1 className="logo">
                    <Link to="/">
                        React<em> class</em>
                    </Link>
                </h1>
                <nav className="menu">
                    <h2 className="ir_so">메인 메뉴</h2>
                    <ul>
                        <li>
                            <a href="#">회원가입</a>
                        </li>
                        <li>
                            <a href="#">댓글</a>
                        </li>
                        <li>
                            <a href="#">게시판</a>
                        </li>
                        <li>
                            <a href="#">블로그</a>
                        </li>
                        <li>
                            <a href="#">퀴즈</a>
                        </li>
                    </ul>
                </nav>
                <div className="member">
                    <img
                        src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        className="profile"
                        alt=""
                    />
                    <span className="ir_so">회원 정보 영역</span>
                    <Link to="/login">Login</Link>
                </div>
            </header>
        </>
    );
}
