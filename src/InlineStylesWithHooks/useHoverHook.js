import {useState, useRef, useEffect} from "react"

const UseHoverHook = () => {
    console.log("hover hook")
    const [value, setValue] = useState(false);
    const ref = useRef(null);
    const handleMouseOver = () => setValue(true);
    const handleMouseOut = () => setValue(false);
    useEffect(
        () => {
            const node = ref.current;
            if (node) {
                node.addEventListener("mouseover", handleMouseOver);
                node.addEventListener("mouseout", handleMouseOut);
                // return () => {
                //     node.removeEventListener("mouseover", handleMouseOver);
                //     node.removeEventListener("mouseout", handleMouseOut);
                // };
            }
        },
        [ref.current] // Recall only if ref changes
    );
    console.log(ref, value)
    return [ref, value];

}

export default UseHoverHook