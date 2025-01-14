"use client"

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

import showcaseImage1 from '@/public/images/image-showcase1.png';
import showcaseImage2 from '@/public/images/image-showcase2.png';
import showcaseImage3 from '@/public/images/image-showcase3.png';
import showcaseImage4 from '@/public/images/image-showcase4.png';

import './styles.css';

const images = [
    showcaseImage1,
    showcaseImage2,
    showcaseImage3,
    showcaseImage4
];

const Section2 = () => {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef(null);


  return (
    <section className="vr_showcase-section py-5">
      <div className="">
        <h2 className="text-center text-uppercase">One girl at a time</h2>

        <div ref={sectionRef} className="image-display">
        {images.map((src, index) => (
            <Image
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className={visible ? "spread" : "default"}
            style={{ "--image-index": index }}
            />
        ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;