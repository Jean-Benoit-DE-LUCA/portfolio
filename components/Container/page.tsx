import dynamic from "next/dynamic";

const DynamicContainer = dynamic(() => import("./pageClient"), {
    ssr: false
});

export default DynamicContainer;