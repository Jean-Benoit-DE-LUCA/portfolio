"use client";

import { Fragment } from "react";
import Header from "../../../../components/Header/page";
import Project from "../../../../components/Project/page";
import Footer from "../../../../components/Footer/page";

export default function ProjectName({params}: {params: {projectname: string}}) {

    return (
        <Fragment>
            <Header />
            <Project projectname={params.projectname} />
            <Footer />
        </Fragment>
    );
}