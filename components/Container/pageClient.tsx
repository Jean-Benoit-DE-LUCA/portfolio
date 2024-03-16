"use client";

import { usePathname } from "next/navigation";
import Loader from "../Loader/page";
import { useEffect, useState } from "react";

export default function Container({children}: {children: React.ReactNode}) {

    const pathname = usePathname();






    /* USESTATE */

    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {

        setTimeout(() => {

            setIsLoading(false);
        }, 1500);

    }, []);








    if (isLoading) {

        return <Loader />
    }

    
    
    return (

        <div className={pathname.startsWith("/project") ? "container project" : "container"}>
            {children}
        </div>

    );

}