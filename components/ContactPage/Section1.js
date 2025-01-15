import Image from 'next/image';
import Link from 'next/link';
import Form from 'next/form'

import linkedinIcon from "@/public/icons/linkedin-icon.png";
import phoneIcon from "@/public/icons/phone-icon.png";
import locationIcon from "@/public/icons/location-icon.png";
import arrowLeftIcon from "@/public/icons/arrow_left-icon.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import './styles.css';

const Section1 = () => {
  return (
    <section className='contact_page-section1'>
        <footer className='footer wrapper'>
            <div className="container-fluid pt-5 pb-3">

                <section className="row">
                    <div className="col-md-4 col-sm-12 py-3">
                        <section className="feedback-form">
                            <h3>LEAVE A MESSAGE</h3>
                            <form className='d-flex flex-column gap-4'>
                                <input type="text" name="email" className='form-control' placeholder='Enter here' required />
                                <input type="text" name="message" className='form-control' placeholder='Type Message' required />
                                <button type="submit">Send</button>
                            </form>
                        </section>
                    </div>

                    <div className="col-md-4 col-sm-12 py-3">
                        <section className="social-media d-flex flex-column gap-3" >
                        <h3>FOLLOW SOCIALS</h3>
                        <ul>
                            <li>
                            <Link href="" target='_blank'>
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                                <span>mematech_</span>
                            </Link>
                            </li>
                            <li>
                            <Link href="" target='_blank'>
                                <Image src={linkedinIcon} alt="social-icon" />
                                <span>MemaTech Empowerment Foundation</span>
                            </Link>
                            </li>
                        </ul>
                        </section>
                    </div>

                    <div className="col-md-4 col-sm-12 py-3">
                        <section className="social-media d-flex flex-column gap-3" >
                            <h3>ADDRESS</h3>
                            <ul>
                                <li>
                                    <Link href="tel:+2347034361648" target='_blank'>
                                        <Image src={phoneIcon} alt="social-icon" />
                                        <span>+234 703 4361 648</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" target='_blank'>
                                        <Image src={locationIcon} alt="social-icon" />
                                        <span>Drive 1, Prince and Princess Estate, Abuja.</span>
                                    </Link>
                                </li>
                            </ul>
                        </section>
                    </div>

                </section>

                <section className="row footer-bottom py-3 mt-4 d-md-none">
                    <div className="col-md-4 col-sm-12 py-md--3 py-1">
                        <p className='mb-0'>Copyright &copy; 2023 MemaTech</p>
                    </div>
                    <div className="col-md-4 col-sm-12 py-md--3 py-1">
                        <p className='mb-0'>All rights reserved, 2025</p>
                    </div>
                    <div className="col-md-4 col-sm-12 py-md--3 py-1">
                        <p className='mb-0'>Website designed by cosmos design space</p>
                    </div>
                </section>

                <section className="marquee-section py-2">
                    <span className='marquee'>
                        LET'S TALK &nbsp; <Image src={arrowLeftIcon} alt="social-icon" /> &nbsp;
                        LET'S TALK &nbsp; <Image src={arrowLeftIcon} alt="social-icon" /> &nbsp;
                        LET'S TALK &nbsp; <Image src={arrowLeftIcon} alt="social-icon" /> &nbsp;
                        LET'S TALK &nbsp; <Image src={arrowLeftIcon} alt="social-icon" /> &nbsp;
                        LET'S TALK &nbsp; <Image src={arrowLeftIcon} alt="social-icon" /> &nbsp;
                        LET'S TALK &nbsp; <Image src={arrowLeftIcon} alt="social-icon" /> &nbsp;
                    </span>
                </section>

            </div>
        </footer>
    </section>
  )
}

export default Section1