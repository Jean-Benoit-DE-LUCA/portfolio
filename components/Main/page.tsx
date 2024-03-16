"use client";


import { useEffect, useState } from "react";

import arrow from "../../public/pictures/arrow_.svg";

import imageCode from "../../public/pictures/code.jpg";


import speakfluentChatResponsive from "../../public/pictures/speakfluent_chat_responsive.jpg";
import correrjuntosHomeResponsive from "../../public/pictures/correrjuntos_home_responsive.jpg";
import tapizzaCustomResponsive from "../../public/pictures/tapizza_custom_responsive.jpg";

import abstractBackground from "../../public/pictures/abstract_background.jpg";

import htmlTag from "../../public/pictures/html_tag.svg";
import pencil from "../../public/pictures/pencil.svg";
import puzzle from "../../public/pictures/puzzle.svg";
import arrowUpRight from "../../public/pictures/arrow-up-right.svg";

import checkCircle from "../../public/pictures/check-circle.svg";
import envelopeX from "../../public/pictures/envelope-x.svg";

import Image from "next/image";
import Link from "next/link";


declare global {

    interface Window {

        Email: any;
    }
}

export default function Main() {

    /* USESTATE */

    const [arrayObjectWork, setArrayObjectWork] = useState({
        "0": {
            name: "Speakfluent",
            front_picture: speakfluentChatResponsive,
            opacity: false
        },
        "1": {
            name: "Correrjuntos",
            front_picture: correrjuntosHomeResponsive,
            opacity: false
        },
        "2": {
            name: "Tapizza",
            front_picture: tapizzaCustomResponsive,
            opacity: false
        },
        "3": {
            name: "Upcoming",
            front_picture: abstractBackground,
            opacity: true
        },
        "4": {
            name: "Upcoming",
            front_picture: abstractBackground,
            opacity: true
        },
        "5": {
            name: "Upcoming",
            front_picture: abstractBackground,
            opacity: true
        },
        "6": {
            name: "Upcoming",
            front_picture: abstractBackground,
            opacity: true
        }
    });

    /*--------------------------------------------------------------------------------------------------------------------*/









    /* FUNCTION CHECK LENGHT FIELD VALUE LENGHT */

    const checkFieldValueLength = (arrayField: Array<any>) => {

        for (let i = 0; i < arrayField.length; i++) {

            if (arrayField[i].value.length == 0) {

                arrayField[i].classList.add("error");
            }
        }
    };







    /* HANDLE CHANGE CONTACT FIELD */

    const handleChangeContactField = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {

        if (e.target.value.length > 0) {

            e.currentTarget.classList.remove("error");
        }
    };




    /* SEND CONTACT MESSAGE */

    const handleSubmitContactMessage = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        const name = (document.getElementById("contact--name") as HTMLInputElement);
        const email = (document.getElementById("contact--email") as HTMLInputElement);
        const message = (document.getElementById("contact--message") as HTMLTextAreaElement);

        const divMessage = (document.getElementsByClassName("div--message")[0] as HTMLDivElement);
        const divSpanMessage = (document.getElementsByClassName("div--message--span")[0] as HTMLSpanElement);

        const imgSuccess = (document.getElementsByClassName("div--message--img--success")[0] as HTMLImageElement);
        const imgError = (document.getElementsByClassName("div--message--img--error")[0] as HTMLImageElement);

        const tokenCredential = "7ad843e5-7bf2-4e05-8994-938b7070867a";







        const arrayField = [name, email, message];


        if (name.value == "" || email.value == "" || message.value == "") {

            checkFieldValueLength(arrayField);

            name.value == "" ? name.focus() : email.value == "" ? email.focus() : message.value == "" ? message.focus() : "";
        }






        else if (name.value !== "" && email.value !== "" && message.value !== "") {

            const sendMail = await window.Email.send({
                SecureToken: tokenCredential,
                To : "jb270685@gmail.com",
                From : "jb270685@gmail.com",
                Subject : `Contact message from ${email.value}`,
                Body : `Message from ${email.value}:
                        ${message.value}`
            });
    
            if (sendMail == "OK") {
    
                divMessage.classList.add("active", "success");
                imgSuccess.classList.add("active");
                divSpanMessage.textContent = "The message has been sent, you'll receive a response very soon.";
    
                setTimeout(() => {
    
                    divSpanMessage.textContent = "";
                    imgSuccess.classList.remove("active");
                    divMessage.classList.remove("active", "success");
                }, 4000);
    
            }
            
            else {
    
                divMessage.classList.add("active", "error");
                imgError.classList.add("active");
                divSpanMessage.textContent = "An error occurred while sending the message.";
    
                setTimeout(() => {
    
                    divSpanMessage.textContent = "";
                    imgError.classList.remove("active");
                    divMessage.classList.remove("active", "error");
                }, 4000);
            }




            divMessage.scrollIntoView({
                behavior: "smooth"
            });
        }
    };


















    /* CLICK LINK PROJECT */

    const handleClickLinkProject = (e: React.MouseEvent<HTMLAnchorElement>) => {

        e.preventDefault();

        if (e.currentTarget.pathname !== "/project/upcoming") {

            window.location.pathname = e.currentTarget.pathname;
        }
    };













    /* SCROLL LISTENER HEADER BACKGROUND */

    const handleScrollHeaderListener = (e: any) => {

        document.documentElement.style.setProperty("--opacityBackgroundHeader", (window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight)).toString());
    };




    useEffect(() => {

        document.addEventListener("scroll", handleScrollHeaderListener);
    }, []);










    /* CLICK ARROW CAROUSEL */

    const handleClickArrowCarousel = (e: React.MouseEvent | React.TouchEvent, direction: string) => {

        
        const carouselDiv = (document.getElementById("section--main--section--work--first--part--div--section--carousel--div") as HTMLDivElement);

        const carouselImageWrap = (document.getElementsByClassName("section--main--section--work--first--part--div--section--carousel--div--img--wrap") as HTMLCollectionOf<HTMLDivElement>);

        const centerScreenWidth = Math.floor(window.screen.width / 2);

        
        const closestElementArray = [];

        if (direction == "right") {




            for (let i = 0; i < carouselImageWrap.length; i++) {

                if ((carouselImageWrap[i].getClientRects()[0].x - centerScreenWidth) >= 0) {

                    closestElementArray.push(carouselImageWrap[i].getClientRects()[0].x - centerScreenWidth);
                }
            }



            const closestElementMin = Math.min.apply(Math, closestElementArray);

            for (let i = 0; i < carouselImageWrap.length; i++) {

                if ((carouselImageWrap[i].getClientRects()[0].x - centerScreenWidth) == closestElementMin) {

                    carouselDiv.scrollBy({
                        left: Number((carouselImageWrap[i]).offsetWidth) + parseInt(getComputedStyle(carouselImageWrap[i]).marginRight),
                        behavior: "smooth"
                    });
                }
            }
        }




        else if (direction == "left") {




            for (let i = 0; i < carouselImageWrap.length; i++) {

                if ((carouselImageWrap[i].getClientRects()[0].x) < 0) {

                    closestElementArray.push(carouselImageWrap[i].getClientRects()[0].x);
                }

            }

            const closestElementMax = Math.max.apply(Math, closestElementArray);

            for (let i = 0; i < carouselImageWrap.length; i++) {

                if ((carouselImageWrap[i].getClientRects()[0].x) == closestElementMax) {

                    carouselDiv.scrollBy({
                        left: - (Number((carouselImageWrap[i]).offsetWidth) + parseInt(getComputedStyle(carouselImageWrap[i]).marginRight)),
                        behavior: "smooth"
                    });
                }
            }
        }

    };

    /* MOUSEDOWN CAROUSEL SCROLL */

    let leftScroll = 0;
    let mouseXpos = 0;

    const handleClickDownScroll = (e: any) => {

        if (e.target.id == "section--main--section--work--first--part--div--section--carousel--div") {

            leftScroll = e.currentTarget.scrollLeft;
            mouseXpos = e.clientX;

            e.target.style.cursor = "grabbing";

            document.addEventListener("mousemove", handleMouseMoveScroll);
            document.addEventListener("mouseup", handleMouseUpScroll);
        }
    };


    const handleMouseMoveScroll = (e: any) => {

        const carouselDiv = (document.getElementById("section--main--section--work--first--part--div--section--carousel--div") as HTMLDivElement);

        carouselDiv.scrollLeft = leftScroll - (e.clientX - mouseXpos);
    };

    const handleMouseUpScroll = (e: any) => {


        const carouselDiv = (document.getElementById("section--main--section--work--first--part--div--section--carousel--div") as HTMLDivElement);

        carouselDiv.style.cursor = "grab";

        document.removeEventListener("mousemove", handleMouseMoveScroll);
        document.removeEventListener("mouseup", handleMouseUpScroll);
    };


    /*-----------------------------------------------------------------------------------------------------------------*/
















    /* SETINTERVAL ABOUT WORD */

    useEffect(() => {


        let count = 1;

        let intervalWord = setInterval(() => {

            const arrayAboutWord = ["Developer", "Problem solver", "Passionate"];

            if (count == arrayAboutWord.length) {

                count = 0;
            }

            const spanAboutLetterWrap = (document.getElementsByClassName("section--main--section--about--second--part--div--div--h3--span")[0] as HTMLSpanElement);

            const spanAboutLetter= (document.getElementsByClassName("section--main--section--about--second--part--div--div--h3--span--letter")as HTMLCollectionOf<HTMLSpanElement>);

            while (spanAboutLetterWrap.children.length !== 0) {

                for (let i = 0; i < spanAboutLetterWrap.children.length; i ++) {

                    spanAboutLetterWrap.children[i].remove();
                }
            }



            

            if (spanAboutLetterWrap.children.length == 0) {

                for (let i = 0; i < arrayAboutWord[count].length; i++) {

                    let spanElem = document.createElement("span");
                    spanElem.setAttribute("class", "section--main--section--about--second--part--div--div--h3--span--letter");
                    
                    if (arrayAboutWord[count][i] == " ") {
                        
                        //spanElem.innerHTML = "<&nbsp;>";
                        spanAboutLetterWrap.appendChild(document.createElement("br"));
                    }

                    else {

                        spanElem.textContent = arrayAboutWord[count][i];
                    }
        
                    spanAboutLetterWrap.appendChild(spanElem);
                }

                count++;
            }

        }, 5000);



        return () => clearInterval(intervalWord);

    }, []);

    /*-------------------------------------------------------------------------------------------------------------*/




















    /* INTERSECTION OBSERVER */

    const observerFunction = (stringClass: string) => {

        const elementToObserve = (document.getElementsByClassName(stringClass) as HTMLCollectionOf<HTMLElement>);

        const observer = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");
                }

                else {

                    entry.target.classList.remove("active");
                }
            })
        });

        for (let i = 0; i < elementToObserve.length; i++) {

            observer.observe(elementToObserve[i]);
        }
    }

    useEffect(() => {

        observerFunction("link--observe");

    }, []);

    /*---------------------------------------------------------------------------------------------------------------------------------------*/


    











    /* MOUSEENTER IMG WORK */

    const mouseEnterLeaveImg = () => {

        const imgElement = (document.getElementsByClassName("section--main--section--work--first--part--div--section--carousel--div--img") as HTMLCollectionOf<HTMLImageElement>);

        for (let i = 0; i < imgElement.length; i++) {

            imgElement[i].addEventListener("mouseenter", mouseEnterImgFunction);
            imgElement[i].addEventListener("mouseleave", mouseLeaveImgFunction);
        }
    };


    const mouseEnterImgFunction = (e: MouseEvent) => {

        const imgElement = e.currentTarget as HTMLImageElement;

        const spanElement = imgElement.parentElement?.getElementsByClassName("section--main--section--work--first--part--div--section--carousel--div--img--span")[0] as HTMLSpanElement;

        const spanElementSpan = spanElement.getElementsByClassName("section--main--section--work--first--part--div--section--carousel--div--img--span--span")[0] as HTMLSpanElement;

        const spanElementSpanLine = spanElementSpan.getElementsByClassName("section--main--section--work--first--part--div--section--carousel--div--img--span--span--line")[0] as HTMLSpanElement;

        imgElement.classList.add("active");
        //spanElement.classList.add("active");

        spanElementSpan.classList.add("active");
        spanElementSpan.classList.remove("active_back");

        spanElementSpanLine.classList.add("active");

    };

    const mouseLeaveImgFunction = (e: MouseEvent) => {

        const imgElement = e.currentTarget as HTMLImageElement;

        const spanElement = imgElement.parentElement?.getElementsByClassName("section--main--section--work--first--part--div--section--carousel--div--img--span")[0] as HTMLSpanElement;

        const spanElementSpan = spanElement.getElementsByClassName("section--main--section--work--first--part--div--section--carousel--div--img--span--span")[0] as HTMLSpanElement;

        const spanElementSpanLine = spanElementSpan.getElementsByClassName("section--main--section--work--first--part--div--section--carousel--div--img--span--span--line")[0] as HTMLSpanElement;

        imgElement.classList.remove("active");
        //spanElement.classList.remove("active");

        spanElementSpan.classList.remove("active");
        spanElementSpan.classList.add("active_back");

        spanElementSpanLine.classList.remove("active");
    };

    /*---------------------------------------------------------------------------------------------------------------*/





















    useEffect(() => {

        mouseEnterLeaveImg();
    }, []);

    

    return (

        <section className="section--main">

            <h1 className="section--main--h1">
                
                <span className="section--main--h1--span">Hi there, </span>
                <br/>
                <span className="section--main--h1--span">I'm Jean-Benoit </span>
                <br className="br off"/>
                
                <span className="section--main--h1--span"> DE LUCA, a </span>
                <br/>
                <span className="section--main--h1--span">Full Stack Web </span>
                <br className="br off"/>
                <span className="section--main--h1--span">Developer. </span>
                <br/>
                <span className="section--main--h1--span">Let's bring </span>
                <br className="br off"/>
                <span className="section--main--h1--span">your ideas to </span>
                <br/>
                <span className="section--main--h1--span">the </span>
                <span className="section--main--h1--span">life.</span>
            </h1>






            <section className="section--main--section--about">

                <div className="section--main--section--about--first--part">
                    <Image
                        className="section--main--section--about--first--part--img"
                        src={imageCode}
                        alt="image-code"
                        width={0}
                        height={0}
                        unoptimized
                    />
                </div>


                <div className="section--main--section--about--second--part">
                    
                    <div className="section--main--section--about--second--part--div">

                        <h2 className="section--main--section--about--second--part--div--h2 link--observe" id="about">
                            <span className="section--main--section--about--second--part--div--h2--span--border top">About</span>
                            <span className="section--main--section--about--second--part--div--h2--span--border right">About</span>
                            <span className="section--main--section--about--second--part--div--h2--span--border bottom">About</span>
                            <span className="section--main--section--about--second--part--div--h2--span--border left">About</span>

                            <svg className="svg--rect--section" width="105" height="39.2">
                                <rect className="svg--rect--section--rect" width="100%" height="100%"></rect>
                            </svg>

                            <span className="section--main--section--about--second--part--div--h2--span">
                                <span className="section--main--section--about--second--part--div--h2--span--letter">A</span>
                                <span className="section--main--section--about--second--part--div--h2--span--letter">b</span>
                                <span className="section--main--section--about--second--part--div--h2--span--letter">o</span>
                                <span className="section--main--section--about--second--part--div--h2--span--letter">u</span>
                                <span className="section--main--section--about--second--part--div--h2--span--letter">t</span>
                            </span>
                        </h2>
                    </div>
                    
                    <div className="section--main--section--about--second--part--div--div">

                        <h3 className="section--main--section--about--second--part--div--div--h3">

                            <span className="section--main--section--about--second--part--div--div--h3--span">
                                <span className="section--main--section--about--second--part--div--div--h3--span--letter">D</span>
                                <span className="section--main--section--about--second--part--div--div--h3--span--letter">e</span>
                                <span className="section--main--section--about--second--part--div--div--h3--span--letter">v</span>
                                <span className="section--main--section--about--second--part--div--div--h3--span--letter">e</span>
                                <span className="section--main--section--about--second--part--div--div--h3--span--letter">l</span>
                                <span className="section--main--section--about--second--part--div--div--h3--span--letter">o</span>
                                <span className="section--main--section--about--second--part--div--div--h3--span--letter">p</span>
                                <span className="section--main--section--about--second--part--div--div--h3--span--letter">e</span>
                                <span className="section--main--section--about--second--part--div--div--h3--span--letter">r</span>
                            </span>

                        </h3>

                    </div>

                    <div className="section--main--section--about--second--part--div--div--div">

                        <p className="section--main--section--about--second--part--div--div--div--p">With expertise in differents programming languages, I strive to bring my clients ideas to life through aesthetic, responsive, and functional websites. <br/> Whether it's for a small business, a fast-growing startup, or a large enterprise, I'm committed to delivering innovative web solutions that exceed expectations.</p>

                    </div>
                </div>




                <div className="section--main--section--about--third--part">


                    <div className="section--main--section--about--third--part--wrap--element">

                        <div className="section--main--section--about--third--part--div--element">

                            <Image
                                className="section--main--section--about--third--part--div--element--img tag"
                                src={htmlTag}
                                alt="icon"
                                height={0}
                                width={0}
                            />
                            <span className="section--main--section--about--third--part--div--element--title">Development</span>

                            <p className="section--main--section--about--third--part--div--element--text">For me, development is more than just coding; it's about problem-solving and creativity. I enjoy crafting solutions that are both functional and engaging. Development isn't just a job; it's my passion.</p>

                        </div>

                        <div className="section--main--section--about--third--part--div--element">

                            <Image
                                className="section--main--section--about--third--part--div--element--img tag"
                                src={pencil}
                                alt="icon"
                                height={0}
                                width={0}
                            />
                            <span className="section--main--section--about--third--part--div--element--title">Design</span>

                            <p className="section--main--section--about--third--part--div--element--text">Design is my creative voice. Through colors, shapes, and typography, I craft impactful experiences. It's about storytelling and fostering connections. Design is my essence.</p>

                        </div>

                    </div>



                    <div className="section--main--section--about--third--part--wrap--element">

                        <div className="section--main--section--about--third--part--div--element">

                            <Image
                                className="section--main--section--about--third--part--div--element--img tag"
                                src={puzzle}
                                alt="icon"
                                height={0}
                                width={0}
                            />
                            <span className="section--main--section--about--third--part--div--element--title">Integration</span>

                            <p className="section--main--section--about--third--part--div--element--text">Integration is the art of harmonizing diverse elements into a unified whole. It's about combining different parts to create something greater than the sum of its parts.</p>

                        </div>

                        <div className="section--main--section--about--third--part--div--element">

                            <Image
                                className="section--main--section--about--third--part--div--element--img tag"
                                src={arrowUpRight}
                                alt="icon"
                                height={0}
                                width={0}
                            />
                            <span className="section--main--section--about--third--part--div--element--title">Optimization</span>

                            <p className="section--main--section--about--third--part--div--element--text">Enhancing Performance, Boosting Impact. Fine-tuning every detail for digital excellence.</p>

                        </div>
                    
                    </div>


                </div>


            </section>









            <section className="section--main--section--work">

                <div className="section--main--section--work--first--part--div">

                    <h2 className="section--main--section--about--second--part--div--h2 link--observe" id="work">
                        <span className="section--main--section--about--second--part--div--h2--span--border top">Work</span>
                        <span className="section--main--section--about--second--part--div--h2--span--border right">Work</span>
                        <span className="section--main--section--about--second--part--div--h2--span--border bottom">Work</span>
                        <span className="section--main--section--about--second--part--div--h2--span--border left">Work</span>

                        <svg className="svg--rect--section" width="105" height="39.2">
                            <rect className="svg--rect--section--rect" width="100%" height="100%"></rect>
                        </svg>

                        <span className="section--main--section--about--second--part--div--h2--span">
                            <span className="section--main--section--about--second--part--div--h2--span--letter">W</span>
                            <span className="section--main--section--about--second--part--div--h2--span--letter">o</span>
                            <span className="section--main--section--about--second--part--div--h2--span--letter">r</span>
                            <span className="section--main--section--about--second--part--div--h2--span--letter">k</span>
                        </span>
                    </h2>

                    <h3 className="section--main--section--about--second--part--div--div--h3 work">

                        <span className="section--main--section--work--second--part--div--div--h3--span link--observe">
                            <span className="section--main--section--work--second--part--div--div--h3--span--letter">C</span>
                            <span className="section--main--section--work--second--part--div--div--h3--span--letter">h</span>
                            <span className="section--main--section--work--second--part--div--div--h3--span--letter">e</span>
                            <span className="section--main--section--work--second--part--div--div--h3--span--letter">c</span>
                            <span className="section--main--section--work--second--part--div--div--h3--span--letter">k</span>
                            &nbsp;
                            <span className="section--main--section--work--second--part--div--div--h3--span--letter">m</span>
                            <span className="section--main--section--work--second--part--div--div--h3--span--letter">y</span>
                            <br />
                            <span className="section--main--section--work--second--part--div--div--h3--span--letter">u</span>
                            <span className="section--main--section--work--second--part--div--div--h3--span--letter">n</span>
                            <span className="section--main--section--work--second--part--div--div--h3--span--letter">i</span>
                            <span className="section--main--section--work--second--part--div--div--h3--span--letter">v</span>
                            <span className="section--main--section--work--second--part--div--div--h3--span--letter">e</span>
                            <span className="section--main--section--work--second--part--div--div--h3--span--letter">r</span>
                            <span className="section--main--section--work--second--part--div--div--h3--span--letter">s</span>
                            <span className="section--main--section--work--second--part--div--div--h3--span--letter">e</span>
                        </span>
                        
                    </h3>

                    <section className="section--main--section--work--first--part--div--section--carousel">


                        <div className="section--main--section--work--first--part--div--section--carousel--div--arrow--button--wrap">

                            <button type="button" className="section--main--section--work--first--part--div--section--carousel--div--arrow--button left" name="section--main--section--work--first--part--div--section--carousel--div--arrow--button--left" data-arrow="left" onClick={(e) => handleClickArrowCarousel(e, "left")} onTouchStart={(e) => handleClickArrowCarousel(e, "left")}>
                                <Image
                                    className="section--main--section--work--first--part--div--section--carousel--div--arrow--img left"
                                    src={arrow}
                                    alt="arrow"
                                    width={0}
                                    height={0}
                                    unoptimized
                                />
                            </button>
                            <button type="button" className="section--main--section--work--first--part--div--section--carousel--div--arrow--button right" name="section--main--section--work--first--part--div--section--carousel--div--arrow--button--right" data-arrow="right" onClick={(e) => handleClickArrowCarousel(e, "right")} onTouchStart={(e) => handleClickArrowCarousel(e, "left")}>
                                <Image
                                    className="section--main--section--work--first--part--div--section--carousel--div--arrow--img right"
                                    src={arrow}
                                    alt="arrow"
                                    width={0}
                                    height={0}
                                    unoptimized
                                />
                            </button>
                            
                        </div>


                        <div className="section--main--section--work--first--part--div--section--carousel--div" id="section--main--section--work--first--part--div--section--carousel--div" onMouseDown={handleClickDownScroll}>
                            
                            {Object.keys(arrayObjectWork).map(elem => 
                                
                                <Link key={elem} href={`/project/${(arrayObjectWork as any)[elem].name.toLowerCase()}`} onClick={handleClickLinkProject}>
                                    <div className="section--main--section--work--first--part--div--section--carousel--div--img--wrap">
                                        <span className="section--main--section--work--first--part--div--section--carousel--div--img--span">
                                            <span className="section--main--section--work--first--part--div--section--carousel--div--img--span--span">
                                                {(arrayObjectWork as any)[elem].name}
                                                <span className="section--main--section--work--first--part--div--section--carousel--div--img--span--span--line"></span>
                                            </span>
                                        </span>
                                        <Image

                                            className={(arrayObjectWork as any)[elem].opacity ? `section--main--section--work--first--part--div--section--carousel--div--img opacity` : `section--main--section--work--first--part--div--section--carousel--div--img`}

                                            src={(arrayObjectWork as any)[elem].front_picture}
                                            alt="project-card"
                                            height={0}
                                            width={0}
                                            unoptimized
                                        />
                                    </div>
                                </Link>
   
                            )}

                            {/*<div className="section--main--section--work--first--part--div--section--carousel--div--img--wrap">
                                <span className="section--main--section--work--first--part--div--section--carousel--div--img--span">
                                    <span className="section--main--section--work--first--part--div--section--carousel--div--img--span--span">
                                        Speakfluent
                                        <span className="section--main--section--work--first--part--div--section--carousel--div--img--span--span--line"></span>
                                    </span>
                                </span>
                                <Image
                                    className="section--main--section--work--first--part--div--section--carousel--div--img"
                                    src={speakfluentChatResponsive}
                                    alt="project-card"
                                    height={0}
                                    width={0}
                                    unoptimized
                                />
                            </div>

                            <div className="section--main--section--work--first--part--div--section--carousel--div--img--wrap">
                                <span className="section--main--section--work--first--part--div--section--carousel--div--img--span">
                                    <span className="section--main--section--work--first--part--div--section--carousel--div--img--span--span">
                                        Speakfluent
                                        <span className="section--main--section--work--first--part--div--section--carousel--div--img--span--span--line"></span>
                                    </span>
                                </span>
                                <Image
                                    className="section--main--section--work--first--part--div--section--carousel--div--img"
                                    src={correrjuntosHomeResponsive}
                                    alt="project-card"
                                    height={0}
                                    width={0}
                                    unoptimized
                                />
                            </div>*/}
                        </div>

                    </section>

                </div>




            </section>






            <section className="section--main--section--contact">

                <div className="div--message">

                    <Image
                        className="div--message--img--success"
                        src={checkCircle}
                        alt="check"
                        width={0}
                        height={0}
                        unoptimized
                    />

                    <Image
                        className="div--message--img--error"
                        src={envelopeX}
                        alt="check"
                        width={0}
                        height={0}
                        unoptimized
                    />

                    <span className="div--message--span">
                    
                    </span>

                </div>

                <div className="section--main--section--contact--first--part--div">

                    <div className="section--main--section--contact--first--part--div--wrap--child">

                        <h2 className="section--main--section--about--second--part--div--h2 link--observe" id="contact">
                            <span className="section--main--section--about--second--part--div--h2--span--border contact top">Contact</span>
                            <span className="section--main--section--about--second--part--div--h2--span--border contact right">Contact</span>
                            <span className="section--main--section--about--second--part--div--h2--span--border contact bottom">Contact</span>
                            <span className="section--main--section--about--second--part--div--h2--span--border contact left">Contact</span>

                            <svg className="svg--rect--section contact" width="120" height="39.2">
                                <rect className="svg--rect--section--rect contact" width="100%" height="100%"></rect>
                            </svg>

                            <span className="section--main--section--about--second--part--div--h2--span">
                                <span className="section--main--section--about--second--part--div--h2--span--letter">C</span>
                                <span className="section--main--section--about--second--part--div--h2--span--letter">o</span>
                                <span className="section--main--section--about--second--part--div--h2--span--letter">n</span>
                                <span className="section--main--section--about--second--part--div--h2--span--letter">t</span>
                                <span className="section--main--section--about--second--part--div--h2--span--letter">a</span>
                                <span className="section--main--section--about--second--part--div--h2--span--letter">c</span>
                                <span className="section--main--section--about--second--part--div--h2--span--letter">t</span>
                            </span>
                        </h2>

                        <p className="section--main--section--about--second--part--div--div--div--p contact">If you have any questions or wish to collaborate, write me a message.</p>

                    </div>

                    <form method="POST" className="section--main--section--contact--first--part--div--form" name="section--main--section--contact--first--part--div--form" onSubmit={handleSubmitContactMessage}>

                        <label htmlFor="contact--name" className="section--main--section--contact--first--part--div--form--label">
                            Name:
                        </label>
                        <input type="text" className="section--main--section--contact--first--part--div--form--input" id="contact--name" name="contact--name" placeholder="Name" onChange={handleChangeContactField}/>

                        <label htmlFor="contact--email" className="section--main--section--contact--first--part--div--form--label">
                            Email:
                        </label>
                        <input type="email" className="section--main--section--contact--first--part--div--form--input" id="contact--email" name="contact--email" placeholder="Email" onChange={handleChangeContactField}/>

                        <label htmlFor="contact--message" className="section--main--section--contact--first--part--div--form--label">
                            Message:
                        </label>
                        <textarea className="section--main--section--contact--first--part--div--form--textarea" name="contact--message" id="contact--message" placeholder="Your message" onChange={handleChangeContactField}></textarea>

                        <button type="submit" className="section--main--section--contact--first--part--div--form--button" id="section--main--section--contact--first--part--div--form--button" name="section--main--section--contact--first--part--div--form--button">
                            Submit
                            <span className="section--main--section--contact--first--part--div--form--button--span">Submit</span>
                        </button>


                    </form>
                </div>

                






            </section>

        </section>
    );
}