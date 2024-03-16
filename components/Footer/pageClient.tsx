"use client";

import logo from "../../public/pictures/logo_jb.png";
import Image from "next/image";

import { usePathname, useRouter } from "next/navigation";

export default function Footer() {

    const pathname = usePathname();

    const router = useRouter()






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









    return (
    
        <footer className={pathname !== "/" ? "footer project--footer" : "footer"}>

            <div className="footer--div--wrap">

                <div className="logo--img--page--wrap">
                    <Image
                        className="logo--img--page"
                        src={logo}
                        alt="logo"
                        width={0}
                        height={0}
                        unoptimized
                        priority={true}
                    />
                </div>
                
                <div className="footer--div--wrap--child">
                    <ul className="footer--ul">

                        <a href="#about" className="nav--ul--a footer--anchor" data-section="about" onClick={handleClickAnchorMenu}>
                            <li className="nav--ul--a--li">
                                About
                            </li>
                            <span className="nav--ul--a--span--line"></span>
                        </a>

                        <a href="#work" className="nav--ul--a footer--anchor" data-section="work" onClick={handleClickAnchorMenu}>
                            <li className="nav--ul--a--li">
                                Work
                            </li>
                            <span className="nav--ul--a--span--line"></span>
                        </a>

                        <a href="#contact" className="nav--ul--a footer--anchor" data-section="contact" onClick={handleClickAnchorMenu}>
                            <li className="nav--ul--a--li">
                                Contact
                            </li>
                            <span className="nav--ul--a--span--line"></span>
                        </a>

                    </ul>
                </div>

                <span className="copyright--footer">
                    
                    <span className="copyright--footer--wrap--child">
                        <span className="copyright--symbol">©</span>
                        <span className="copyright--year">{new Date().getFullYear()}</span>
                    </span>

                    <span className="copyright--author">Jean-Benoit DE LUCA</span>
                </span>

            </div>

        </footer>
    );
}