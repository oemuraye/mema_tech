import Image from 'next/image';

import programImage1 from "../../public/images/programImage1.png";
import programImage2 from "@/public/images/programImage2.png";
import programImage3 from "@/public/images/programImage3.png";

import './styles.css';

const Section1 = () => {
  return (
    <section className='programs_page-section1 wrapper padding_y-spacing'>
        <article className="page-section1 hero container">
            <h2 className="text-md-center text-sm-start">PROGRAMS</h2>
            <p className="text-md-center text-sm-start">At MemaTech, we believe in creating tailored opportunities that empower girls, women, and small businesses to thrive in a tech-driven world. Through our two core initiatives—Karatu Girls and Masma Reach—we address the unique needs of young girls and women, equipping them with the skills, confidence, and opportunities to excel in technology and beyond.</p>
        </article>

        <section className="program-list">
    <div className="program-item-wrapper">
        <div className="program-item padding_y-spacing">
            <div className="row">
                <div className="col-md-5 col-sm-12 mb-5 position-relative">
                    <div className="image_container">
                        <Image src={programImage1} alt="Program 1" className='img-fluid' height="462px"/>
                    </div>
                </div>
                <div className="col-md-7 col-sm-12 mb-5 program-details rounded-4 p-2 p-md-4">
                    <div className="p-md-4 p-2 py-5 details-text">
                        <h3>Laptop<span>4</span>STEM:</h3>
                        <h5>Empowering Girls to Pursue STEM Education</h5>
                        <p>The Laptop4STEM initiative aims to provide laptops to girls in underserved communities who are passionate about STEM education. The goal is to empower these girls with the tools and resources they need to succeed in STEM-related careers and pursue their dreams. Many girls in these communities lack access to laptops and digital tools, creating a digital divide that can lead to a significant gap in STEM education.</p>
                        <p>To help bridge this gap, you can donate a gently used laptop, make a financial donation to purchase new laptops, or spread the word and raise awareness about the importance of STEM education for girls.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="program-item padding_y-spacing">
            <div className="row">
                <div className="col-md-5 col-sm-12 mb-5 position-relative">
                    <div className="image_container">
                        <Image src={programImage2} alt="Program 1" className='img-fluid' height="462px"/>
                    </div>
                </div>
                <div className="col-md-7 col-sm-12 mb-5 program-details rounded-4 p-2 p-md-4">
                    <div className="p-md-4 p-2 py-5 details-text">
                        <h3>KARATU GIRLS:</h3>
                        <h5>Unlocking the Future for Secondary School Girls</h5>
                        <p>At MemaTech, we believe in creating tailored opportunities that empower girls, women, and small businesses to thrive in a tech-driven world. Through our two core initiatives—Karatu Girls and Masma Reach—we address the unique needs of young girls and women, equipping them with the skills, confidence, and opportunities to excel in technology and beyond.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="program-item padding_y-spacing">
            <div className="row">
                <div className="col-md-5 col-sm-12 mb-5 position-relative">
                    <div className="image_container">
                        <Image src={programImage3} alt="Program 1" className='img-fluid' height="462px"/>
                    </div>
                </div>
                <div className="col-md-7 col-sm-12 mb-5 program-details rounded-4 p-2 p-md-4 basic-bg_color">
                    <div className="p-md-4 p-2 py-5 ">
                        <h3>Masma Reach:</h3>
                        <h5>Empowering Women and Small Businesses</h5>
                        <p>The "Masma Reach" initiative empowers women and small and medium-sized enterprises (SMEs) with the skills and support they need to succeed in today’s digital landscape. This program challenges societal barriers, promotes inclusive work environments, and helps women and businesses unlock their full potential.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

    </section>
  )
}

export default Section1