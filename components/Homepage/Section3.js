"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import CountUpAnimation from "./CountUpAnimation";
import "./styles.css";

const Section3 = () => {
  const [triggerCountUp, setTriggerCountUp] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      if (sectionTop < viewportHeight * 0.75 && !triggerCountUp) {
        setTriggerCountUp(true);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [triggerCountUp]);

  return (
    <section className="about-section wrapper py-5">
      <div className="inner_wrapper">
        <div className="row">
          <div className="col-md-5 col-sm-12">
            <section ref={sectionRef}>
              <h3 className="mb-4">ABOUT US</h3>
              <Link className="d-none d-md-flex" href="/about">
                Learn More
              </Link>

              <div className="stats mt-5 d-none d-md-block fade-in">
                <CountUpAnimation
                  end={100}
                  duration={5000}
                  trigger={triggerCountUp}
                />
                <p>Girls Reached</p>
                <Link className="d-flex d-md-none my-5" href="">
                  Learn More
                </Link>
              </div>
            </section>
          </div>
          <div className="col-md-7 col-sm-12">
            <div className="d-flex flex-column gap-3">
              <p>
                At MemaTech, we are committed to bridging the digital divide by
                equipping girls and women in Nigeria with the tools, skills, and
                confidence to thrive in technology. We inspire young minds to
                dream beyond limits and empower women to lead in a rapidly
                evolving digital world.
              </p>
              <p>
                Our mission is clear: to create a more inclusive tech ecosystem
                where every girl can envision a brighter future and every woman
                can turn dreams into impactful realities. Through education,
                mentorship, and community, we’re transforming lives and shaping
                a future led by empowered women.
              </p>
            </div>

            <div className="stats mt-5 d-block d-md-none fade-in">
              <CountUpAnimation
                end={100}
                duration={5000}
                trigger={triggerCountUp}
              />
              <p>Girls Reached</p>
              <Link className="d-flex d-md-none my-5" href="/about">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
