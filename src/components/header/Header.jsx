import React from "react";
import "./header.css";
import "../css/common.css";
import "../css/reset.css";

export default function Header() {
    return (
        <>
            <header id="header">
                <h1 className="logo">
                    <a href="#">
                        React<em> class</em>
                    </a>
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
                            <ul className="sub">
                                <li>
                                    <a href="#">문제 만들기</a>
                                </li>
                                <li>
                                    <a href="#">문제 풀기</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div className="member">
                    <img src="" alt="" />
                    <span className="ir_so">회원 정보 영역</span>
                    <a href="#">회원가입</a>
                    <a href="#">로그인</a>
                </div>
            </header>
        </>
    );
}
