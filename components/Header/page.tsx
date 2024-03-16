"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Header() {

    const router = useRouter();

    /* CLICK ANCHOR MENU */

    const handleClickAnchorMenu = (e: React.MouseEvent) => {



        e.preventDefault();

        const anchorAttribute = (e.currentTarget as HTMLAnchorElement).getAttribute("data-section");

        const sectionToScroll = (document.getElementById(anchorAttribute as string));





        if (window.location.pathname !== "/") {

            router.push(`/#${anchorAttribute}`);
        }

        else {

            sectionToScroll?.scrollIntoView({
                behavior: "smooth"
            });
        }

        
    };











    /* CLICK BURGER MENU */

    const handleClickMenu = (e: React.MouseEvent) => {

        const spanBar = (document.getElementsByClassName("menu--bar")as HTMLCollectionOf<HTMLSpanElement>);

        const nav = (document.getElementsByClassName("nav")[0] as HTMLElement);

        if ((!spanBar[0].classList.contains("active") && !spanBar[0].classList.contains("active_back")) ||
            (spanBar[0].classList.contains("active_back"))) {

            spanBar[0].classList.remove("active_back");
            spanBar[1].classList.remove("active_back");
            spanBar[2].classList.remove("active_back");

            spanBar[0].classList.add("active");
            spanBar[1].classList.add("active");
            spanBar[2].classList.add("active");

            nav.classList.add("active");
        }




        else if (spanBar[0].classList.contains("active")) {

            spanBar[0].classList.remove("active");
            spanBar[1].classList.remove("active");
            spanBar[2].classList.remove("active");

            spanBar[0].classList.add("active_back");
            spanBar[1].classList.add("active_back");
            spanBar[2].classList.add("active_back");

            nav.classList.remove("active");
        }

    };

    /*--------------------------------------------------------------------------------------*/











    /* CLICK ANYWHERE TO CLOSE MEMU */

    const handleClickAnywhereCloseMenu = (e: any) => {

        const spanBar = (document.getElementsByClassName("menu--bar")as HTMLCollectionOf<HTMLSpanElement>);

        const nav = (document.getElementsByClassName("nav")[0] as HTMLElement);

        if (!e.target.classList.contains("header--menu--div--wrap") && !e.target.classList.contains("menu--bar")) {

            if (nav.classList.contains("active")) {

                spanBar[0].classList.remove("active");
                spanBar[1].classList.remove("active");
                spanBar[2].classList.remove("active");

                spanBar[0].classList.add("active_back");
                spanBar[1].classList.add("active_back");
                spanBar[2].classList.add("active_back");

                nav.classList.remove("active");
            }

        }     
    };

    useEffect(() => {

        document.addEventListener("click", handleClickAnywhereCloseMenu);
    }, []);













    return (
        
        <div className="header--wrap">
            <header className="header">
                <div className="header--background">
                    
                </div>

                <nav className="nav">

                    <div className="nav--background">

                    </div>

                    <ul className="nav--ul">

                        <a href="#about" className="nav--ul--a" data-section="about" onClick={handleClickAnchorMenu}>
                            <li className="nav--ul--a--li">
                                About
                            </li>
                            <span className="nav--ul--a--span--line"></span>
                        </a>

                        <a href="#work" className="nav--ul--a" data-section="work" onClick={handleClickAnchorMenu}>
                            <li className="nav--ul--a--li">
                                Work
                            </li>
                            <span className="nav--ul--a--span--line"></span>
                        </a>

                        <a href="#contact" className="nav--ul--a" data-section="contact" onClick={handleClickAnchorMenu}>
                            <li className="nav--ul--a--li">
                                Contact
                            </li>
                            <span className="nav--ul--a--span--line"></span>
                        </a>
                        
                    </ul>
                </nav>

                <div className="header--wrap--child">

                    <div className="header--title">

                            <div className="header--title--letter--wrap">

                                <Link href="/" className="header--title--letter--anchor">
                                    <span className="header--title--letter">J</span>
                                    <span className="header--title--letter">e</span>
                                    <span className="header--title--letter">a</span>
                                    <span className="header--title--letter">n</span>
                                    <span className="header--title--letter">-</span>
                                    <span className="header--title--letter">B</span>
                                    <span className="header--title--letter">e</span>
                                    <span className="header--title--letter">n</span>
                                    <span className="header--title--letter">o</span>
                                    <span className="header--title--letter">i</span>
                                    <span className="header--title--letter">t</span>
                                </Link>

                            </div>

                        
                            
                            <div className="header--title--letter--wrap">

                                <Link href="/" className="header--title--letter--anchor lastname">
                                    <span className="header--title--letter">D</span>
                                    <span className="header--title--letter">E</span>
                                    <span className="header--title--letter">&nbsp;</span>
                                    <span className="header--title--letter">L</span>
                                    <span className="header--title--letter">U</span>
                                    <span className="header--title--letter">C</span>
                                    <span className="header--title--letter">A</span>
                                </Link>
                            </div>

                        

                    </div>


                    <div className="header--menu--wrap">

                        <div className="header--menu">

                            <div className="header--menu--div--wrap" onClick={handleClickMenu}>

                                <span className="menu--bar"></span>
                                <span className="menu--bar"></span>
                                <span className="menu--bar"></span>

                            </div>

                        </div>

                    </div>

                </div>

            </header>
        </div>
    )
}