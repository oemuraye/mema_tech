import Image from 'next/image';

import infoImg from '@/public/images/info_img.png';
// import infoVideo from '@/public/videos/info_img.png';
// import infoVideo from '../../public/videos/intro-video.mp4';

const Section4 = () => {
  return (
    <section className='info-video wrapper'>

          <div className="inner_wrapper">
            {/* <Image src={infoImg} alt='info image' objectFit='cover' className='img-fluid' /> */}
            <video 
              className='img-fluid' autoPlay muted loop controls 
               
            >
              <source src="/videos/intro-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
    </section>
  )
}

export default Section4;