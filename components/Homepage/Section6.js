import Image from 'next/image';

// import './styles.css';

import brandImage1 from '@/public/images/brand1.png';
import brandImage2 from '@/public/images/brand2.png';
import brandImage3 from '@/public/images/brand3.png';
import brandImage4 from '@/public/images/brand4.png';
import brandImage5 from '@/public/images/brand5.png';
import brandImage6 from '@/public/images/brand6.png';
import brandImage7 from '@/public/images/brand7.png';

const images = [
    brandImage1,
    brandImage2,
    brandImage3,
    brandImage4,
    brandImage5,
    brandImage6,
    brandImage7
];

const Section6 = () => {
  return (
    <section className='partners_sponsors-section wrapper py-5'>
        <h4 className="text-center py-5">OUR PARTNERS & SPONSORS</h4>

        <div className="brands d-flex justify-content-center justify-content-md-between align-items-center gap-2 flex-wrap mb-5 m-auto">
            {images.map((src, index) => (
                <div key={index} className='brand-logo my-2'>
                    <Image src={src} alt={`Image ${index + 1}`} className='img-fluid' />
                </div>
            ))}
        </div>
    </section>
  )
}

export default Section6