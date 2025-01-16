"use client"

import Image from 'next/image';
import Link from 'next/link';

import linkedinIcon from "@/public/icons/linkedin-icon.png";
import phoneIcon from "@/public/icons/phone-icon.png";
import locationIcon from "@/public/icons/location-icon.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


import './styles.css';
import { useState } from 'react';

const Footer = () => {
  const [formData, setFormData] = useState({ name: "" });
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormError(""); 
    // setSuccessMessage(""); 
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFormError("");
    setSuccessMessage("");

    if (!formData.message.trim()) {
      setFormError("Please fill in your name");
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
        setFormData({ message: "" }); // Reset form fields
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


  if (successMessage) {
    setTimeout(() => {
      setSuccessMessage(false);
    }, [10000]);
  }
  if (formError) {
    setTimeout(() => {
      setFormError([]);
    }, [10000]);
  }
  return (
    <footer className='footer wrapper py-5'>
      <div className="container-fluid py-5">

        <section className="row">
          <div className="col-md-4 col-sm-12 py-3">
            <section className="feedback-form">
              <h2>LEAVE A MESSAGE</h2>
              <form className="d-flex gap-4" onSubmit={handleSubmit}>
                <input type="text" id="name" name="message" className="form-control" placeholder="Enter here" value={formData.message}
                  onChange={handleChange}
                  required
                />
                <button type="submit" className="">
                  {loading ? (
                    <span className="spinner-border spinner-border-sm text-secondary" role="status" />
                  ) : (
                    "Join Us"
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
                      {/* <FontAwesomeIcon icon={faLinkedinIn} size="2x" /> */}
                      <Image src={linkedinIcon} alt="social-icon" />
                      <span>MemaTech Empowerment <br /> Foundation</span>
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
                        {/* <FontAwesomeIcon icon={faPhone} size="2x" /> */}
                        <Image src={phoneIcon} alt="social-icon" />
                        <span>+234 703 4361 648</span>
                    </Link>
                </li>
                <li>
                    <Link href="" target='_blank'>
                    {/* <FontAwesomeIcon icon={faLocationDot} size="2x" /> */}
                        <Image src={locationIcon} alt="social-icon" />
                        <span>Drive 1, Prince and Princess <br /> Estate, Abuja.</span>
                    </Link>
                </li>
              </ul>
            </section>
          </div>

        </section>

        <hr />

        <section className="row footer-bottom">
          <div className="col-md-4 col-sm-12 py-3">
            <p className='mb-0'>Copyright &copy; 2023 MemaTech</p>
          </div>
          <div className="col-md-4 col-sm-12 py-3">
            <p className='mb-0'>All rights reserved, 2025</p>
          </div>
          <div className="col-md-4 col-sm-12 py-3">
            <p className='mb-0'>Website designed by cosmos design space</p>
          </div>
        </section>

      </div>
    </footer>
  )
}

export default Footer