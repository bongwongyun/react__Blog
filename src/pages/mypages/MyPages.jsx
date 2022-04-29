import React from "react";
import "./mypages.css";

export default function MyPages() {
    return (
        <>
            <h2 className="ir_so">컨텐츠 영역</h2>
            <section className="join-type gray">
                <h2 className="Quizkids">
                    Alpha<span className="kids">Omega</span>
                </h2>
                <div className="member-form">
                    <h3>회원정보</h3>
                    <form name="join" method="post">
                        <fieldset>
                            <legend className="ir_so">회원정보 입력폼</legend>
                            <div className="join-intro">
                                <div className="face">
                                    <img
                                        src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                        alt="img"
                                    />
                                    <div className="intro"></div>
                                </div>
                                <div className="intro">프로필 사진</div>
                            </div>
                            <div className="join-info">
                                <ul>
                                    <li>
                                        <strong>이메일</strong>
                                        <span></span>
                                    </li>
                                    <li>
                                        <strong>닉네임</strong>
                                        <span></span>
                                    </li>
                                    <li>
                                        <strong>이름</strong>
                                        <span></span>
                                    </li>
                                    <li>
                                        <strong>생일</strong>
                                        <span></span>
                                    </li>
                                    <li>
                                        <strong>번호</strong>
                                        <span></span>
                                    </li>
                                    <li>
                                        <strong>성별</strong>
                                        <span></span>
                                    </li>
                                    <li>
                                        <strong>사이트</strong>
                                        <span></span>
                                    </li>
                                </ul>
                            </div>
                            <div className="join-btn">
                                <a href="/">수정하기</a>
                                <a href="/">탈퇴하기</a>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </section>
        </>
    );
}
