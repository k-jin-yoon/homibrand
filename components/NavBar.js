import Link from 'next/link';
import { useRouter } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faBuilding, faCity, faEarthAsia, } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';

export default function NavBar(){
    const router = useRouter();
    const { width, height, isMobile } = GetWindowSize();

    const [isHidden, setIsHidden] = useState(false)
    const changeTopMenu = () => {
        isMobile
        ? setIsHidden(!isHidden)
        : ""
    }
    useEffect(() => {
        if (width>480) {
            setIsHidden(false);
        } else {
            setIsHidden(true);
        }
    }, [width]);
    return (
        <nav>
            <div className={"topMenu"+(isHidden?" hidden":"")}>
            {/* <Link href="/">
                <span className={router.pathname === "/" ? "active":""}> Home </span>
            </Link> */}
            <Link href="/about">
                <span className={router.pathname === "/about" ? "active":""}  onClick={(e)=>changeTopMenu(e)}>About</span>
            </Link>
            <Link href="/category">
                <span className={router.pathname === "/category" ? "active":""}  onClick={e=> changeTopMenu(e)}>Category</span>
            </Link>
            <Link href="/service">
                <span className={router.pathname === "/service" ? "active":""}  onClick={e=> changeTopMenu(e)}>Service</span>
            </Link>
            </div>
            <div className="toggleMenu"  onClick={e=> changeTopMenu(e)}>
                <FontAwesomeIcon icon={faBarsStaggered} />
            </div>
            
            {/* <Link href="/movie">
                <span className={router.pathname === "/movie" ? "active":""}> Movie Test</span>
            </Link> */}
            <style jsx>{`
                nav{
                    display: flex;
                    gap: 0;
                    flex-direction: row;
                    align-items: center;
                    padding: 0;
                    height: 40px;
                }
                img {
                    max-width: 100px;
                    margin-bottom: 5px;
                }
                nav span {
                    font-weight: 600;
                    font-size: 18px;
                    text-transform: uppercase;
                    padding: 10px 20px;
                    color: var(--primary-color);
                    transition: border-bottom 0.2s ease-in-out;
                }
                span:not(.active):hover {
                    color: var(--primary-color);
                    border-bottom: 3px solid var(--primary-color);
                }
                .topMenu {
                    position: relative;
                    display: block;
                    width: 100%;
                    gap: 0;
                    flex-direction: row;
                    align-items: center;
                }
                .topMenu.hidden {
                    display: none;
                }
                .toggleMenu {
                    display: none;
                    color: var(--primary-color);
                }

                nav span.active {
                    color: white;
                    background-color: var(--primary-color);
                    border-radius: 12px;
                }
                @media screen and  (max-width: 480px) {
                    nav {
                        display: flex;
                        gap: 10px;
                        flex-direction: column;
                        align-items: center;
                    }
                    .topMenu {
                        position: absolute;
                        top: 80px;
                        left: 20px;
                        right: 20px;
                        display: flex;
                        width: calc(100% - 40px);
                        height: calc(100vh - 100px);
                        padding: 40px 0;
                        gap: 40px;
                        flex-direction: column;
                        justify-content: space-around;
                        align-items: center;
                        background-color: #222;
                        transition: height 2s;
                        background-color: rgba(240,240,240,0.9);
                    }
                    .topMenu.hidden {
                        display: none;
                        height: 0;
                        transition: height 2s;
                    }
                    .toggleMenu {
                        display: block;
                        font-size: 30px;
                        width: 40px;
                        height: 40px;
                        padding: 5px;
                        line-height: 30px;
                        text-align: center;
                        vertical-align: middle;
                        cursor: pointer;
                    }
                }
            `}</style>
        </nav>
    )
}

export const GetWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
      width: 0,
      height: 0,
      isMobile: true
    });
  
    useEffect(() => {
      if (typeof window !== "undefined") {
        const handleResize = () => {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
            isMobile: window.innerWidth>480?false:true
          });
        };
  
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
      } else {
        return;
      }
    }, []);
    return windowSize;
};