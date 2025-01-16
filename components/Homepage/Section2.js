"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

import showcaseImage1 from "@/public/images/image-showcase1.png";
import showcaseImage2 from "@/public/images/image-showcase2.png";
import showcaseImage3 from "@/public/images/image-showcase3.png";
import showcaseImage4 from "@/public/images/image-showcase4.png";

import "./styles.css";

const images = [
    showcaseImage1,
    showcaseImage2,
    showcaseImage3,
    showcaseImage4
];

const Section2 = () => {
    const sectionRef = useRef(null);
    const [isStacked, setIsStacked] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const sectionTop = sectionRef.current.getBoundingClientRect().top;
            const sectionBottom = sectionRef.current.getBoundingClientRect().bottom;
            const viewportHeight = window.innerHeight;

            // Trigger transition when the section is 75% visible in the viewport
            if (sectionTop < viewportHeight * 0.75 && sectionBottom > viewportHeight * 0.25) {
                setIsStacked(false); // Spread images
            } else {
                setIsStacked(true); // Stack images
            }
        };

        // Attach the scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup the listener on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section className="vr_showcase-section py-5">
            <div className="">
                {/* <h2 className="text-center text-uppercase">One girl at a time</h2> */}

                <div ref={sectionRef} className="image-wrapper">
    <div className={`image-display ${isStacked ? "stacked" : "spread"}`}>
        {images.map((src, index) => (
            <Image
                key={index}
                src={src}
                alt={`Image ${index + 1}`}
                className="showcase-image"
                style={{ "--image-index": index }}
            />
        ))}
    </div>
    <h2 className={`text-center text-uppercase`}>One girl at a time</h2>
</div>

            </div>
        </section>
    );
};

export default Section2;