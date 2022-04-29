import React from "react";
import "./view.css";

export default function View() {
    return (
        <>
            <h2 className="ir_so">컨텐츠 영역</h2>
            <section id="blog-type" className="center">
                <div className="blog__label">
                    <h3 className="section__title">물(水, 영어: water)</h3>
                    <div>
                        <span className="author">
                            <a href="#">김진우</a>
                        </span>
                        <span className="date">22-03-29 04:20</span>
                        <br />
                        <span className="modify">
                            <a href="#">수정</a>
                        </span>
                        <span className="delete">
                            <a href="#">삭제</a>
                        </span>
                    </div>
                </div>
                <div className="container">
                    <div className="blog__layout">
                        <div className="blog__left">
                            <div>
                                <img src="https://source.unsplash.com/800x600/?nature,water" alt="" />
                            </div>
                            <h4>물(水, 영어: water)</h4>

                            <div>
                                물(水, 영어: water)은 산소와 수소가 결합된 화학 물질이다. 화학식 H 2O를 가지며 표준 온도
                                압력(STAP : 섭씨 25°C 1바)에서 무색 투명하고, 무취무미하다. 물은 가장 보편적인 용매로
                                보통 액체 상태의 물을 가리킨다. 고체 상태인 것을 얼음, 기체 상태인 것을 수증기라고
                                부른다. 인공적으로는 수소와 산소를 혼합한 뒤 방전을 일으켜서 만들어 낼 수 있다. 열량이
                                없고 유기 영양분을 제공하지는 않지만 생명을 유지하는데 없어서는 안 되는 필수적 요소다.
                                인류를 비롯한 모든 생물에게 있어서 가장 중요한 물질이며, 생체의 주요한 성분이다. 인체는
                                약 70%, 어류는 약 80%, 그 밖에 물 속의 미생물은 약 95%가 물로 구성되어 있다. 생명현상은
                                여러 물질이 물에 녹아있는 수용액에 의해서 일어나는 화학변화가 복잡하게 얽힌 것이라 말할
                                수 있다. 물은 지표면의 71% 정도를 덮고 있으며 지구상에 존재하는 전체 물의 97.5%는
                                바닷물이다. 인간이 이용가능한 담수(민물)는 2.5%인데, 그 중에서 68.7%는 빙하와
                                만년설이고, 지하수와 토양의 수분 등을 제외하고 실질적으로 인간이 사용할 수 있는 물은
                                전체 담수의 0.3% 정도이며, 이는 지구 전체 물의 양에 0.007%에 불과하다. 한국의 연평균
                                강수량은 약 1,280㎜로 세계 평균 강수량(약 970㎜)에 비해 약 1.3배이며, 잠재적으로
                                사용가능한 전체 수자원의 약 26% 정도를 이용하고 있다. 지구상의 존재하는 물의 총량은
                                일정하며 증발, 증산, 응축, 강수, 유출을 통해 순환한다. 바닷물, 대기의 수증기, 구름,
                                토양의 물, 지표수, 지하수, 동식물 사이에서 지속적인 이동이 이루어지며 이를 통해서 기후
                                변화를 좌우하고 끓임없이 지구 생태계와 인류문명에 많은 영향을 주고있다.
                            </div>
                        </div>
                        <div className="blog__right">
                            <div className="ad">
                                <iframe
                                    src="https://ads-partners.coupang.com/widgets.html?id=572099&template=carousel&trackingCode=AF4942662&subId=&width=300&height=1000"
                                    width="300"
                                    height="1000"
                                    frameBorder="0"
                                    scrolling="no"
                                    referrerPolicy="unsafe-url"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
