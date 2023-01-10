export default function Footer(){
    return (
        <>
            <footer>
                <div className="logo">
                    <p>
                        <strong>Homi korea</strong>
                    </p>
                </div>
                <div className="copyright">
                    <p>since 2023 © kyol</p>
                </div>
                <div className="company">
                    <p><strong>주식회사 결</strong></p>
                </div>
            </footer>
            <style jsx>{`
                * {
                    font-size: .85rem;
                    line-height: 28px;
                    vertical-align: middle;
                }
                footer {
                    display: flex;
                    gap: 10px;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-around;
                    width: 100%;
                    min-height: 80px;
                    border-top: 1px solid rgba(50, 50, 50, 0.5);
                    box-shadow: 0 0 8px 4px rgba(50, 50, 50, 0.25);
                }
                p {padding: 0 20px;}
                img {
                    width: 100px;
                }
                @media screen and  (max-width: 480px) {
                    footer {
                        flex-direction: column;
                        padding: 20px 0;
                    }
                }
                @media (prefers-color-scheme: dark) {
                    footer {
                        border-top: 1px solid rgba(150, 150, 150, 0.5);
                        box-shadow: 0 0 8px 4px rgba(150, 150, 150, 0.25);
                    }
                }
            `}</style>
        </>
    )
}