import Link from 'next/link';
import './styles.css';

const Section3 = () => {
    
  return (
    <section className='about-section wrapper py-5'>
        <div className="inner_wrapper">
            <div className="row">
                <div className="col-md-5 col-sm-12">
                    <section className="">
                        <h3>ABOUT US</h3>
                        <Link href=''>Learn</Link>

                        <div className="stats mt-5">
                            <h5 className='mb-0'>10 +</h5>
                            <p>Girls Reached</p>
                        </div>
                    </section>
                </div>
                <div className="col-md-7 col-sm-12">
                    <section className="d-flex flex-column gap-3">
                        <p>At MemaTech, we are committed to bridging the digital divide by equipping girls and women in Nigeria with the tools, skills, and confidence to thrive in technology. We inspire young minds to dream beyond limits and empower women to lead in a rapidly evolving digital world. </p>
                        <p>Our mission is clear: to create a more inclusive tech ecosystem where every girl can envision a brighter future and every woman can turn dreams into impactful realities. Through education, mentorship, and community, we’re transforming lives and shaping a future led by empowered women.</p>
                    </section>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section3