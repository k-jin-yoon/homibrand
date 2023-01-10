import Seo from "../components/Seo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight, faCity, faEarthAsia, } from "@fortawesome/free-solid-svg-icons";

export default function About(){
    return (
        <div className="container">
            <Seo title="About" />
            <h1>About Homi</h1>
            {/* 간단한 인사말 쓰기 */}
            <div className="greeting">
                <h2>호미(Homi)</h2>
                <div>
                    <p>
                        순 우리말의 초성에 들어가는 한 글자로 된, “ㄲ”을 우리나라 대표 농기구인 호미(好美, HO-MI)를 접목하였다.<br/>
                        우리 문화의 본질은 비틀고 꼬는 문화에서 시작되며, 호미의 본질인 “깨다, 솎아내다”의 기능적인 의미와 한국적 미와 풍류를 즐긴 “아름다움을 좋아한다.”는 개념적인 의미를 중의적 표현으로 담았다.
                    </p>
                    <p>
                        한글의 유용성과 다변성, 확장성을 알림과 동시에 기능성을 담아, 세계적으로 많이 알려진 호미를 브랜드(好美, HO-MI)화 하고,<br/>
                        한국의 문화예술, 관광,한식, 영화, 드라마 웹툰 등 가장 한국적이며 대표적인 요소를 한 곳에 담아, 전 세계에 홍보함으로써 전 세계인이 찾고 즐기는 한국형 콘텐츠 플랫폼의 기능을 하고자 함이다.
                    </p>
                    <p>
                    또한, 문화브랜드 HO-MI KOREA의 저변확대를 통해 iconic brand로, UC(united culture)로, 각 나라의 문화예술과 기술을 플랫폼을 통해 알리고, 상호교류하는 장을 만들어 글로벌 문화창조를 하려 한다.
                    </p>
                </div>
            </div>
            <style jsx>{`
                .container {
                    display: flex;
                    gap: 20px;
                    flex-direction: column;
                    align-items: start;
                    justify-content: center;
                    max-width: 960px;
                }
                .greeting p {
                    margin: 20px 30px;
                    line-height: 28px;
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
            `}</style>
        </div>
    );
}