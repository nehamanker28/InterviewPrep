import { useEffect, useState } from "react";

function useDebounce(value : string,delay:number) : string {
    const [debounceText, setDebounceValue] = useState(value);
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => clearTimeout(timer);
    }, [value, delay]);

    return debounceText;
}
export default useDebounce;