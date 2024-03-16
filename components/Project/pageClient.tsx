"use client";

import Link from "next/link";
import Image from "next/image";

import arrowLeft from "../../public/pictures/arrow-left.svg";
import githubImage from "../../public/pictures/github.svg";

/* projects pictures */

import speakfluentHome from "../../public/pictures/speakfluent_home.jpg";
import speakfluentHomeMenu from "../../public/pictures/speakfluent_home_menu.jpg";
import speakfluentChat from "../../public/pictures/speakfluent_chat.jpg";
import speakfluentChatResponsive from "../../public/pictures/speakfluent_chat_responsive.jpg";
import speakfluentChatResponsivePassword from "../../public/pictures/speakfluent_chat_responsive_password.jpg";
import speakfluentVideoChat from "../../public/pictures/speakfluent_video_chat.jpg";
import speakfluentVideoChatResponsive from "../../public/pictures/speakfluent_video_chat_responsive.jpg";



/* ----------------- */

import { useEffect, useState } from "react";

export default function Project({projectname}: {projectname: string}) {

    

    /* INTERFACE */

    interface DataObjectInterface {
        backgroundImage: string;
        codeLink: string;
        textPresentation: string;
        miscellaneousImages: Array<any>
    }






    /* USESTATE */

    const [dataObject, setDataObject] = useState<DataObjectInterface>({
        backgroundImage: "",
        codeLink: "",
        textPresentation: "",
        miscellaneousImages: [],
    });





    /* SET DATA OBJECT */

    const setDataObjectFunction = (projectname: string) => {

        if (projectname == "speakfluent") {

            let newDataObject = Object.assign({}, {

                backgroundImage: "speakfluent_home.jpg",
                codeLink: "https://github.com/Jean-Benoit-DE-LUCA/speakfluent_front",
                textPresentation: "Speakfluent has one goal, to bring people together. It's a simple and convenient interface that allows communication with people in different languages. Whether you want to practice speaking in a foreign language to improve your oral skills or simply enjoy conversing in various languages, Speakfluent provides the platform. The option to communicate through writing or video adds a real advantage in strengthening connections and fostering affinities.",
                miscellaneousImages: [
                    "speakfluent_home_menu.jpg",
                    "speakfluent_chat.jpg",
                    "speakfluent_video_chat.jpg",
                    "speakfluent_chat_responsive.jpg",
                    "speakfluent_chat_responsive_password.jpg",
                    "speakfluent_video_chat_responsive.jpg"
                ]
            })

            setDataObject(newDataObject);
        }




        else if (projectname == "correrjuntos") {

            let newDataObject = Object.assign({}, {

                backgroundImage: "correrjuntos_home_last_race.jpg",
                codeLink: "https://github.com/Jean-Benoit-DE-LUCA/correrjuntos_front",
                textPresentation: "Do you want to share your passion for running with other enthusiasts like you? You've come to the right place! On Correrjuntos, you can explore a variety of races created by passionate users, or even create your own! Sign up for a race that interests you, set a date and time that works for everyone, and get ready to run together to achieve your fitness goals. But that's not all! Our built-in chat feature allows you to communicate with other participants to organize race details, share tips, and encourage each other along the way.",
                miscellaneousImages: [
                    "correrjuntos_home.jpg",
                    "correrjuntos_race.jpg",
                    "correrjuntos_home_last_race.jpg",
                    "correrjuntos_home_responsive.jpg",
                    "correrjuntos_home_responsive_last_race.jpg",
                    "correrjuntos_home_responsive_testimonial.jpg"
                ]
            })

            setDataObject(newDataObject);
        }




        else if (projectname == "tapizza") {

            let newDataObject = Object.assign({}, {

                backgroundImage: "tapizza_list.jpg",
                codeLink: "https://github.com/Jean-Benoit-DE-LUCA/tapizza",
                textPresentation: " Whether you're a die-hard fan of classic combos or you like to mix things up with your own creations, we've got just what you need. Check out our menu for some mouthwatering pizzas, or get creative and build your own masterpiece. With our fresh ingredients and killer flavor combos, you can't go wrong! Ordering is easy-peasy, and we'll have your pizza at your doorstep before you can say \"extra cheese, please!\" So, what are you waiting for? Dive into a slice of heaven and let the pizza party begin!",
                miscellaneousImages: [
                    "tapizza_list.jpg",
                    "tapizza_menu.jpg",
                    "tapizza_list_.jpg",
                    "tapizza_order_responsive.jpg",
                    "tapizza_subscribe_responsive.jpg",
                    "tapizza_custom_responsive.jpg"
                ]
            })

            setDataObject(newDataObject);
        }
    };

    useEffect(() => {

        setDataObjectFunction(projectname);
    }, []);
























    /* CLICK ARROW SCROLL */

    const handleClickArrowScroll = (e: React.MouseEvent) => {

        const pictureId = (document.getElementById("picture") as HTMLDivElement);

        window.scrollBy({
            top: Number(pictureId.offsetTop - window.scrollY) + Number(parseInt(getComputedStyle(pictureId).paddingTop)),
            behavior: "smooth"
        });
    };





    /* SCROLL LISTENER HEADER BACKGROUND */

    const handleScrollHeaderListener = (e: any) => {


        document.documentElement.style.setProperty("--opacityBackgroundHeader", (window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight)).toString());
    };

    useEffect(() => {

        document.addEventListener("scroll", handleScrollHeaderListener);
    }, []);



    if (projectname.includes("upcoming")) {

        window.location.pathname = "/";
    }




    return (
        
        <section className="section--project">

            <Link className="back--home--button--anchor" href="/">
                <button className="back--home--button" name="back--home--button" type="button">
                    <Image
                        className="back--home--button--img"
                        src={arrowLeft}
                        alt="arrow"
                        width={0}
                        height={0}
                        unoptimized
                    />
                    Back home
                </button>
            </Link>




            <div className="section--project--first--part--div"
                style={
                    {backgroundImage: `linear-gradient(to bottom, transparent -600%, #2d333b 100%), url("../pictures/${dataObject.backgroundImage}")`}
                }    
            >

                <h2 className="secction--project--h2">{projectname.charAt(0).toUpperCase() + projectname.slice(1)}</h2>

                <p className="section--project--p">
                    {dataObject.textPresentation}
                </p>
            </div>

            <Link className="section--project--link--code" href={dataObject.codeLink} target="_blank">
                <button type="submit" className="section--main--section--contact--first--part--div--form--button project" id="section--main--section--contact--first--part--div--form--button--project" name="section--main--section--contact--first--part--div--form--button">
                    <Image
                        className="section--main--section--contact--first--part--div--form--button--project--img"
                        src={githubImage}
                        alt="github-img"
                        width={0}
                        height={0}
                        unoptimized
                    />
                    View project code
                    <span className="section--main--section--contact--first--part--div--form--button--span project">View project code</span>
                </button>
            </Link>

            




            <Image
                className="arrow--bottom--scroll"
                src={arrowLeft}
                alt="arrow"
                width={0}
                height={0}
                unoptimized
                onClick={handleClickArrowScroll}
            />



            <div className="section--project--second--part--div" id="picture">


                {dataObject.miscellaneousImages.slice(0, 3).map((elem, ind) => 

                    <div key={ind} className="section--project--second--part--div--element"
                        style={
                            {backgroundImage: `url("../pictures/${elem}")`}
                        }
                    >

                    </div>
                )}

                <div className="section--project--second--part--div--wrap--child--small">

                    {dataObject.miscellaneousImages.slice(3).map((elem, ind) => 

                        <div key={ind} className="section--project--second--part--div--element small"
                            style={
                                {backgroundImage: `url("../pictures/${elem}")`}
                            }
                        >

                        </div>
                    )}
                </div>

            </div>

        </section>
    );
}