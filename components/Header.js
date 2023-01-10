import Link from 'next/link';
import NavBar from './../components/NavBar';
export default function Header(){
    return (
        <>
        <header>
            <Link href="/" className="link">
                <div className="logo-box">HOMI Korea</div>
            </Link>
            <NavBar />
        </header>
        <style jsx>{`
            header {
                position: fixed;
                top: 0;
                display: flex;
                gap: 10px;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                padding: 12px 20px;
                width: 100%;
                height: 80px;
                background-color: rgba(210,210,210,.9);
                border-bottom: 1px solid rgba(50, 50, 50, 0.5);
                box-shadow: 0 0 8px 4px rgba(50, 50, 50, 0.25);
                z-index: 99;
            }
            
            .logo-box {
                position: relative;
                padding: 5px;
                width: 160px;
                height: 60px;
                text-align: center;
                vertical-align: middle;
                line-height: 50px;
                font-weight: 900;
                color: var(--primary-color);
            }
            .logo-box:hover::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 16px;
                height: 16px;
                border-top: 5px solid var(--sub-color);
                border-left: 5px solid var(--sub-color);
            }
            .logo-box:hover::after {
                content: '';
                position: absolute;
                right: 0;
                bottom: 0;
                width: 16px;
                height: 16px;
                border-right: 5px solid var(--sub-color);
                border-bottom: 5px solid var(--sub-color);
            }
            @media (prefers-color-scheme: dark) {
                header {
                    background-color: rgba(25,25,25,.9);
                    border-bottom: 1px solid rgba(150, 150, 150, 0.5);
                    box-shadow: 0 0 8px 4px rgba(150, 150, 150, 0.25);
                }
                .logo-box {
                    color: var(--foreground-rgb)
                }
            }
        `}</style>
        </>
    )
}