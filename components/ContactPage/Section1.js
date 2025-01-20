"use client";
import { useState } from "react";

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
    const [formData, setFormData] = useState({ email: "", message: "" });
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormError(""); // Clear any errors
    setFormData({ ...formData, [e.target.name]: e.target.value }); // Update form data
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFormError("");
    setSuccessMessage("");

    // Validation
    if (!formData.email.trim()) {
      setFormError("Please provide your email");
      setLoading(false);
      return;
    }
    if (!formData.message.trim()) {
      setFormError("Please type your message");
      setLoading(false);
      return;
    }

    // Send data to the server
    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({ email: "", message: "" }); // Reset form fields
      } else {
        const errorData = await response.json();
        setFormError(errorData.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setFormError("Failed to send your message. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  // Automatically clear messages after 10 seconds
  if (successMessage) {
    setTimeout(() => {
      setSuccessMessage("");
    }, 10000);
  }
  if (formError) {
    setTimeout(() => {
      setFormError("");
    }, 10000);
  }
  return (
    <section className='contact_page-section1'>
        <footer className='footer wrapper'>
            <div className="container-fluid pt-5 pb-3">

                <section className="row">
                    <div className="col-md-4 col-sm-12 py-3">
                        <section className="feedback-form">
                            <h3>LEAVE A MESSAGE</h3>
                            <form className="d-flex flex-column gap-4" onSubmit={handleSubmit}>
                            <input type="text" name="email" className="form-control" placeholder="Enter here" value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <input type="text" name="message" className="form-control" placeholder="Type Message" value={formData.message}
                                onChange={handleChange}
                                required
                            />
                            <button type="submit" className="">
                                {loading ? (
                                <span className="spinner-border spinner-border-sm text-secondary" role="status" />
                                ) : (
                                "Send"
                                )}
                            </button>
                            </form>
                            {formError && <div className="text-danger mt-2">{formError}</div>}
                            {successMessage && <div className="text-success mt-2">{successMessage}</div>}
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

                <section className="marquee-section d-block d-md-none">
                    <span className='marquee'>
                        LET'S TALK &nbsp; <Image src={arrowLeftIcon} alt="social-icon" /> &nbsp;
                        LET'S TALK &nbsp; <Image src={arrowLeftIcon} alt="social-icon" /> &nbsp;
                        LET'S TALK &nbsp; <Image src={arrowLeftIcon} alt="social-icon" /> &nbsp;
                        LET'S TALK &nbsp; <Image src={arrowLeftIcon} alt="social-icon" /> &nbsp;
                        LET'S TALK &nbsp; <Image src={arrowLeftIcon} alt="social-icon" /> &nbsp;
                        LET'S TALK &nbsp; <Image src={arrowLeftIcon} alt="social-icon" /> &nbsp;
                    </span>
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

                <section className="marquee-section py-2 d-none d-md-block">
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