import Seo from "../components/Seo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faLaptopCode, faFlaskVial, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Service(){
    return (
        <div className="container">
            <Seo title="Service" />
            <h1>Homi Service</h1>
            {/* 오시는 길 -> 카카오맵 연동 */}
            <div className="service">
                <h4>서비스</h4>
                <div className="service-items">
                    <ul>
                        <li>1. 정기구독 서비스</li>
                        <li>2. 구독 서비스</li>
                        <li>3. 교육 서비스</li>
                        <li>4. 스트리밍 서비스</li>
                        <li>5. 광고 서비스</li>
                        <li>6. 매칭 서비스</li>
                        <li>7. 브랜드 서비스</li>
                    </ul>
                </div>
            </div>
            <style jsx>{`
                .container {
                    display: flex;
                    gap: 20px;
                    flex-direction: column;
                    align-items: start;
                    justify-content: start;
                }
                h4 {
                    margin: 20px 0;
                }
                .service-items {
                    width: 760px;
                }
                .service-items ul{
                    padding: 10px;
                    list-style: none;
                }
                .service-items ul li {
                    padding: 12px;
                    border: 1px solid #ccc;
                    border-radius: 12px;
                    margin-top: 8px;
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
                        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
                    }
                }
            `}</style>
        </div>
    );
}