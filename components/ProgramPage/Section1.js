import Image from 'next/image';

import programImage1 from "@/public/images/visionImage1.png";

import './styles.css';

const Section1 = () => {
  return (
    <section className='programs_page-section1 wrapper padding_y-spacing'>
        <article className="page-section1 hero container">
            <h2 className="text-md-center text-sm-start">PROGRAMS</h2>
            <p className="text-md-center text-sm-start">At MemaTech, we believe in creating tailored opportunities that empower girls, women, and small businesses to thrive in a tech-driven world. Through our two core initiatives—Karatu Girls and Masma Reach—we address the unique needs of young girls and women, equipping them with the skills, confidence, and opportunities to excel in technology and beyond.</p>
        </article>

        <section className="program-list">
            <div className="program-item padding_y-spacing">
                <div className="row">
                    <div className="col-md-5 col-sm-12 mb-5">
                        <div className="">
                            <Image src={programImage1} alt="Program 1" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-md-7 col-sm-12 mb-5 program-details rounded-4">
                        <div className="p-md-4 p-2 py-5">
                            <h3>KARATU GIRLS:</h3>
                            <h5>Unlocking the Future for Secondary School Girls</h5>
                            <p>At MemaTech, we believe in creating tailored opportunities that empower girls, women, and small businesses to thrive in a tech-driven world. Through our two core initiatives—Karatu Girls and Masma Reach—we address the unique needs of young girls and women, equipping them with the skills, confidence, and opportunities to excel in technology and beyond.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="program-item padding_y-spacing">
                <div className="row">
                    <div className="col-md-5 col-sm-12 mb-5">
                        <div className="">
                            <Image src={programImage1} alt="Program 1" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-md-7 col-sm-12 mb-5 program-details rounded-4 basic-bg_color">
                        <div className="p-md-4 p-2 py-5">
                            <h3>KARATU GIRLS:</h3>
                            <h5>Unlocking the Future for Secondary School Girls</h5>
                            <p>At MemaTech, we believe in creating tailored opportunities that empower girls, women, and small businesses to thrive in a tech-driven world. Through our two core initiatives—Karatu Girls and Masma Reach—we address the unique needs of young girls and women, equipping them with the skills, confidence, and opportunities to excel in technology and beyond.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
  )
}

export default Section1