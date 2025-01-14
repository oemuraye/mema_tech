import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';


import './styles.css';

const Footer = () => {
  return (
    <footer className='footer wrapper py-5'>
      <div className="container-fluid py-5">

        <section className="row">
          <div className="col-md-4 col-sm-12 py-3">
            <section className="feedback-form">
              <h2>LEAVE A MESSAGE</h2>
              <form className='d-flex gap-4'>
                  <input type="text" id="name" name="name" className='form-control' placeholder='Enter here' required />
                  <button type="submit">Join Us</button>
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
                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
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
                    <FontAwesomeIcon icon={faPhone} size="2x" />
                    <span>+234 703 4361 648</span>
                  </Link>
                </li>
                <li>
                  <Link href="" target='_blank'>
                  <FontAwesomeIcon icon={faLocationDot} size="2x" />
                    <span>Drive 1, Prince and Princess Estate, Abuja.</span>
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