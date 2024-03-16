"use client";

import Image from "next/image";

import logo from "../../public/pictures/logo_jb.png";
import { Fragment } from "react";

export default function Loader() {

    return (

        <Fragment>
            <div className="loader--wrap--background"></div>

            <div className="loader--wrap">


                
                    {/* <div className="logo--wrap"> */}

                        <svg width={250} height={250} className="loader--svg">
                            {/* <circle r={100} cx={125} cy={125} className="loader--svg--circle"></circle> */}
                            <circle r={100} cx={125} cy={125} className="loader--svg--circle--progress"></circle>
                        </svg>

                        <Image
                            className="logo--img"
                            src={logo}
                            alt="logo"
                            width={0}
                            height={0}
                            unoptimized
                            priority={true}
                        />
                    </div>
                {/* </div> */}

            
        </Fragment>
    )
}