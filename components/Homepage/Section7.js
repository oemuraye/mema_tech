"use client"
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import visionHeroImg from '@/public/images/vision-hero_img.png';

const visionDetails = {
    details1: {
        title: 'Increased Digital Literacy',
        description: 'Women in underserved communities, especially in northern Nigeria, gain essential digital skills to confidently integrate technology into their daily lives.',
    },
    details2: {
        title: 'Enhanced Employability',
        description: 'With technical training, women are equipped to secure jobs across diverse sectors, boosting economic growth and supporting self-sustainability.',
    },
    details3: {
        title: 'Entrepreneurial Empowerment',
        description: 'With our digital centers, women gain the knowledge and tools to start and scale businesses in e-commerce, digital marketing, and freelancing.',
    },
    details4: {
        title: 'Socio-Economic Development',
        description: 'Empowered women positively impact their families and communities, leading to better living standards, reduced poverty, and stronger social cohesion.',
    },
}

const Section7 = () => {
    const imageRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, []);


  return (
    <section className='vision-section wrapper py-5'>
        <div className="inner-wrapper text-center">
            <h2>Creating Opportunities and Driving Change</h2>
            <p className='my-4'>We are committed to opening doors for women and girls in the technology sector by offering education, training, and access to opportunities that enhance their employability and entrepreneurial potential.</p>
        </div>

        <div className="vision-cards d-flex justify-content-md-between justify-content-sm-center align-items-center gap-2 flex-wrap mb-5">
            {Object.values(visionDetails).map((detail, index) => (
                <div key={index} className="vision-card m-auto my-3">
                    <div className="ball-pin mb-4"></div>
                    <h5>{detail.title}</h5>
                    <p>{detail.description}</p>
                </div>
            ))}
        </div>

        <div className="inner-wrapper text-center">
            <h2>Join us in delivering change-one girl, one dream, one step at a time.</h2>

            <div className={`vision-hero_img`} ref={imageRef}>
                <Image src={visionHeroImg} alt="" className='img-fluid' />
            </div>
        </div>
    </section>
  )
}

export default Section7