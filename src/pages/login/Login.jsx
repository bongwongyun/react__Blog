import React from "react";
import "./login.css";

export default function Login() {
    return (
        <>
            <h2 className="ir_so">컨텐츠 영역</h2>
            <section className="join-type gray">
                <h2 className="Quizkids">
                    Alpha<span className="kids">Omega</span>
                </h2>
                <div className="member-form02">
                    <h3 className="ir_so">로그인</h3>
                    <form name="join" method="post">
                        <fieldset>
                            <legend className="ir_so">로그인 입력폼</legend>
                            <div className="join-box">
                                <div>
                                    <label htmlFor="youEmail" className="ir_so">
                                        아이디
                                    </label>
                                    <input
                                        type="email"
                                        id="youEmail"
                                        name="youEmail"
                                        placeholder="아이디를 입력해주세요."
                                        autoComplete="off"
                                        autoFocus
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="youPass" className="ir_so">
                                        비밀번호
                                    </label>
                                    <input
                                        type="password"
                                        id="youPass"
                                        name="youPass"
                                        maxLength="20"
                                        placeholder="비밀번호를 입력해주세요."
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                                <div className="join-checkbox">
                                    <input type="checkbox" value="idSave" />
                                    <span>로그인 저장</span>
                                    <input type="checkbox" value="aotoLogin" />
                                    <span>자동 로그인</span>
                                </div>
                                <button id="joinbtn" className="join-submit" type="submit">
                                    로그인
                                </button>
                                <div className="login__option">
                                    <a href="#">아이디 찾기</a>
                                    <span>|</span>
                                    <a href="#">비밀번호 찾기</a>
                                    <span>|</span>
                                    <a href="#">회원가입</a>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </section>
        </>
    );
}
