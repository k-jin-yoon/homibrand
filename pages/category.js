import Seo from "../components/Seo";
import Image from 'next/image'
import styles from '../styles/Category.module.css'

export default function Category(){
    return (
        <div className="container">
            <Seo title="Category" />
            <h1>Homi Category</h1>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <h2>끼</h2>
                    <p>한국을 대표하는 음악(전통, 현대), 미술, 한국적 공예(무형문화재, 전통계승자, 기능보유자, 문화보존회 등) 엔터테인먼트 연예기획, 한복, 한지의 세계화 등 다방면의 한국적 끼를 발산하고, 한국미를 알릴 수 있는 것을 담는다.</p>
                </div>
                <div className={styles.card}>
                    <h2>꾀</h2>
                    <p>우리나라만이 가진 독특하고 우수한 발명품과 기술 등 세계화와 확장 가능한 기술과 독보적 상품을 소개하고, 미래를 이끌 스타트업, 벤처 기업을 소개하려 한다.</p>
                </div>
                <div className={styles.card}>
                    <h2>꼴</h2>
                    <p>한국의 영화, 드라마, 웹툰, 전시, 축제, 여행, 다큐, 템플스테이 등 넷플릭스, 디즈니 의 스트리밍 서비스의 종속적 관계에서 벗어나 한국형 플랫폼을 세계에 알리기 위함이다.</p>
                </div>
                <div className={styles.card}>
                    <h2>끈</h2>
                    <p>관련 기관, 단체, 협회, 기업 등의 홍보와 마케팅의 유기적 관계를 통해, 윈-윈 할 수 있는 교류의의 장이다.</p>
                </div>
                <div className={styles.card}>
                    <h2>꿈</h2>
                    <p>출판, 교육, 학회, 문필(소설, 수필) 등 대한민국의 미래를 짊어질 미래 인재들이 소통을 통해 꿈과 희망을 펼칠 수 있는 교육의 장이다.</p>
                </div>
                <div className={styles.card}>
                    <h2>깡</h2>
                    <p>스포츠, 군사, 무예, e-sports, 씨름 등 한국의 무예와 군사, 스포츠를 알리고, 세계화를 이끄는 장이다.</p>
                </div>
                <div className={styles.card}>
                    <h2>꾼</h2>
                    <p>한국의 농업과 축산, 수산, 장사, 중소기업 등 중소강국으로, 소상공인과 농업을 기반으로 한 대한민국의 뿌리를 구축하는 틀을 만드는 장이다. </p>
                </div>
                <div className={styles.card}>
                    <h2>꿀</h2>
                    <p>한국의 5대 발효음식은 된장, 간장, 고추장, 김장, 젓갈이다. 여기에 한국의 전통주와 식초 등을 통한, 전통을 이어가는 사찰음식, 종가음식 등 우리의 음식문화를 담으려 한다.</p>
                </div>
            </div>
            <style jsx>{`
                .container {
                    display: flex;
                    gap: 20px;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                }
                
                .active {
                    color: white;
                    background-color: rgba(127,27,125,1);
                }
                @media screen and  (max-width: 480px) {
                    .container {
                        display: flex;
                        gap: 10px;
                        flex-direction: column;
                        align-items: center;
                        padding-top: 20px;
                        padding-bottom: 10px;
                    }
                }
                @media (prefers-color-scheme: dark) {
                    .maxim {
                        border-top: 2px solid var(--sub-shadow);
                        border-bottom: 2px solid var(--sub-shadow);
                    }
                }
            `}</style>
        </div>
    );
}