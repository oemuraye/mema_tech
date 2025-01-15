"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import visionImg1 from '@/public/images/visionImage1.png';
import visionImg2 from '@/public/images/visionImage2.png'; 
import visionImg3 from '@/public/images/visionImage3.png';
import visionImg4 from '@/public/images/visionImage4.png';
import visionImg5 from '@/public/images/visionImage5.png';
import visionImg6 from '@/public/images/visionImage6.png';

import './styles.css';

const images = [
    visionImg1, visionImg2, visionImg3, visionImg4, visionImg5, visionImg6
];

const Section1 = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); 
    
        return () => clearInterval(interval); 
    }, [images.length]);
    
  return (
    <section className="vision_mission-section wrapper py-5">
      <div className="row my-0 my-md-5">
        <div className="image-container container col-md-5 col-sm-12 d-none d-md-block">
          <Image src={images[currentImageIndex]} alt={`Vision ${currentImageIndex + 1}`} className='img-fluid' />
        </div>

        <div className="mission-content container col-md-7 col-sm-12">
          <div className="content">
            <h3>VISION</h3>
            <p>
              To create a world where every girl and woman in Nigeria can unlock 
              her potential through technology, leading change, inspiring future 
              generations, and shaping a more inclusive, tech-driven society.
            </p>
          </div>
          <div className="content d-block d-md-none my-5">
            <Image src={images[currentImageIndex]} alt={`Vision ${currentImageIndex + 1}`} className='img-fluid' />
          </div>
          <div className="content">
            <h3>MISSION</h3>
            <p>
              To empower the girl child and women in Nigeria with transformative 
              technology education, equipping them with the skills, confidence, 
              and opportunities needed to thrive in a digital world and drive 
              inclusive innovation.
            </p>
          </div>
          <div className="content">
            <h3>OUR STORY</h3>
            <p>In northern Nigeria, girls face limited opportunities in STEM education, hindered by societal norms and expectations. MemaTech aims to change this by empowering girls and women through technology education and training, bridging the digital divide and fostering a more inclusive tech ecosystem. </p>
            <p>We strive to create a Mindshift in young girls, introducing them to role models, mentors, and a community of like-minded individuals who can support and encourage their growth. Our holistic approach includes training, workshops, access to tech hubs and communities, and opportunities for internships, fellowships, and job placements.</p>
            <p>Our goal is to create a ripple effect of change, empowering a generation of girls and women to become leaders, innovators, and change-makers in their communities. We believe they can break down barriers, challenge stereotypes, and achieve their full potential by providing them with the right tools, support, and opportunities.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section1