import dynamic from "next/dynamic";

const DynamicProject = dynamic(() => import("./pageClient"), {
    ssr: false
});

export default DynamicProject;