import dynamic from "next/dynamic";

const DynamicProjectComponent = dynamic(() => import("./pageClient"), {
    ssr: false
});

export default DynamicProjectComponent;