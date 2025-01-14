import Image from 'next/image';

import infoImg from '@/public/images/info_img.png';

const Section4 = () => {
  return (
    <section className='info-video wrapper'>
        {/* <div className='video-display' style={{ position: 'relative', paddingTop: '56.25%' }}>
            <iframe
              src="https://www.youtube.com/embed/UrOvKF9QmPw?autoplay=1&mute=1&loop=1&playlist=UrOvKF9QmPw&rel=0"
              title="Cosmos Conference Video"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className='custom-video'
            ></iframe>
          </div> */}

          <div className="inner_wrapper">
            <Image src={infoImg} alt='info image' objectFit='cover' className='img-fluid' />
          </div>
    </section>
  )
}

export default Section4;