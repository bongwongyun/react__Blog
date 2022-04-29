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
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/join">Join</Link>
                        </li>
                        <li>
                            <Link to="/view">View</Link>
                        </li>
                        <li>
                            <Link to="/write">Write</Link>
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
                    <Link to="/mypages">MyPage</Link>
                </div>
            </header>
        </>
    );
}
