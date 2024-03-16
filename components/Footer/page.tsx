import dynamic from "next/dynamic";

const DynamicFooter = dynamic(() => import("./pageClient"), {
    ssr: false
});

export default DynamicFooter;