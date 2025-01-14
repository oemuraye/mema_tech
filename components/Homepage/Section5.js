import Image from 'next/image';
import empowermentImg from '@/public/images/empowerment_img.png';

const Section5 = () => {
  return (
    <section className='empowerment-section py-5'>
        <div className="inner_wrapper">
            <section className="row">
                <div className="col-md-6 col-sm-12">
                    <div className="container">
                        <h3>EMPOWERMENT THROUGH TECHNOLOGY</h3>
                        <p>We strengthen the confidence and capacity of women and girls, equipping them with the tools and knowledge to lead and excel in a tech-driven world. By providing access to education and mentorship, we create pathways for them to dream big and achieve their goals.</p>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="image-section container">
                        <Image src={empowermentImg} alt="empowerment image" objectFit="" className='img-fluid'  />
                    </div>
                </div>
            </section>
        </div>
    </section>
  )
}

export default Section5;