'use client'

import { useEffect, useState } from "react";

export default function Gallery({className}: {className?: string}) {
    const [imageCount, setImageCount] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setImageCount((old) => old < 5 ? old + 1 : 1);
        }, 2000)
        return (() => clearInterval(interval));
    }, [])
    return (
        <div
            style={{
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundImage: `url('/job-${imageCount}.jpg')`,
            }}
            className={`mt-10 rounded-l-full rounded-br-full w-[40%] min-w-[150px] aspect-square shadow-2xl ml-7 ${className}`}
          />
    );
}