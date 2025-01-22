import React from 'react'
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import linkedinIcon from "@/public/icons/linkedin-icon2.png";

import teamImg1 from '@/public/images/executive-img1.png';
import teamImg2 from '@/public/images/executive-img2.png';
import teamImg3 from '@/public/images/executive-img3.png';
import teamImg4 from '@/public/images/executive-img4.png';
import teamImg5 from '@/public/images/executive-img5.png';
import teamImg6 from '@/public/images/executive-img6.png';
import teamImg7 from '@/public/images/executive-img7.png';
import teamImg8 from '@/public/images/executive-img8.png';

import mentorImg1 from '@/public/images/mentor-img1.png';
import mentorImg2 from '@/public/images/mentor-img2.png';
import mentorImg3 from '@/public/images/mentor-img3.png';
import mentorImg4 from '@/public/images/mentor-img4.png';
import mentorImg5 from '@/public/images/mentor-img5.png';
import mentorImg6 from '@/public/images/mentor-img6.png';

const teamMembers = [
  {
    name: "Tryphena Ene Ojile",
    position: "Executive Director",
    image: teamImg1,
    social: {
      linkedin: "https://www.linkedin.com/in/tryphena-ojile",
      // instagram: "https://instagram.com/tryphena",
    },
  },
  {
    name: "Arome Ibrahim",
    position: "Lead - Operations",
    image: teamImg2,
    social: {
      linkedin: "https://www.linkedin.com/in/aromeibrahim",
      // instagram: "https://instagram.com/arome",
    },
  },
  {
    name: "Enoch Leonard Fwa",
    position: "Lead - Technology & Innovation",
    image: teamImg3,
    social: {
      linkedin: "https://www.linkedin.com/in/leonrd",
    },
  },
  {
    name: "Lovina Ihotu OGIDI",
    position: "Lead - Legal & Compliance",
    image: teamImg4,
    social: {
      linkedin: "https://www.linkedin.com/in/lovina-ihotu-ogidi",
    },
  },
  {
    name: "Suleiman Nabagi",
    position: "Creative Director",
    image: teamImg5,
    social: {
      linkedin: "https://www.linkedin.com/in/suleiymahn/",
    },
  },
  {
    name: "Ojonoka Itodo",
    position: "Monitoring and Evaluation Officer",
    image: teamImg6,
    social: {
      linkedin: "https://www.linkedin.com/in/ojonoka-itodo/",
    },
  },
  {
    name: "Chinazor Umeakuka",
    position: "Community Manager",
    image: teamImg7,
    social: {
      linkedin: "https://www.linkedin.com/in/chinazor-umeakuka-a87a1413a/",
    },
  },
  {
    name: "Joseph Yaba",
    position: "Advisory Board - AUECOSOC",
    image: teamImg8,
    social: {
      linkedin: "https://www.linkedin.com/in/joseph-emmanuel-yaba-8893487b/",
    },
  },
];

const mentorMembers = [
  {
    name: "Mayowa Babalola",
    image: mentorImg1,
    social: {
      linkedin: "https://www.linkedin.com/in/babalola-mayowa-897074177/",
    },
  },
  {
    name: "Samuel Fadunsi",
    image: mentorImg2,
    social: {
      linkedin: "https://www.linkedin.com/in/samuelfadunsin/",
    },
  },
  {
    name: "Anthony Odigie",
    image: mentorImg3,
    social: {
      linkedin: "https://www.linkedin.com/in/odigie-anthony/",
    },
  },
  {
    name: "Emmanuel Ogunwede",
    image: mentorImg4,
    social: {
      linkedin: "https://www.linkedin.com/in/emmanuel-ogunwede-665404126/",
    },
  },
  {
    name: "Dalahol Deborah",
    image: mentorImg5,
    social: {
      linkedin: "https://www.linkedin.com/in/deborah-dalahol-99b5a31a9/",
    },
  },
  {
    name: "Joyce Pede",
    image: mentorImg6,
    social: {
      linkedin: "https://www.linkedin.com/in/joyce-pede-97bb44147/",
    },
  },
];





const Section2 = () => {
  return (
    <section className='team-section wrapper'>
        <div className="executive-team">
            <h2 className='text-center my-5'>OUR EXECUTIVE TEAM</h2>

            <div className="team-members row justify-content-center">
            {teamMembers.map((member, index) => (
                <div key={index} className="team-member text-center mb-4 col-md-3 col-sm-6">
                    <Image src={member.image} alt={member.name} className="rounded-circle mb-1 team-image" 
                        width={240} height={240}
                    />
                    <h5 className='mb-0'>{member.name}</h5>
                    <p className='mb-0'>{member.position}</p>
                    <div className="social-icons d-flex justify-content-center gap-3">
                        {member.social.linkedin && (
                          <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                            {/* <FontAwesomeIcon icon={faLinkedinIn}  /> */}
                            <Image src={linkedinIcon} alt="social-icon" />
                          </a>
                        )}
                        {member.social.instagram && (
                          <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} size='' />
                          </a>
                        )}
                    </div>
                </div>
            ))}
            </div>
        </div>

        <div className="mentor-team mt-5 py-5">
            <h2 className='text-center my-5'>MENTORS & VOLUNTEERS</h2>

            <div className="team-members row justify-content-center justify-content-md-start">
            {mentorMembers.map((member, index) => (
                <div key={index} className="team-member text-center mb-4 col-md-3 col-sm-6">
                    <Image src={member.image} alt={member.name} className="rounded-circle team-image mb-1" 
                        width={240} height={240}
                    />
                    <h5 className='mb-0'>{member.name}</h5>
                    <div className="social-icons d-flex justify-content-center gap-3">
                        {member.social.linkedin && (
                          <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                            <Image src={linkedinIcon} alt="social-icon" />
                            {/* <FontAwesomeIcon icon={faLinkedinIn}  /> */}
                          </a>
                        )}
                        {member.social.instagram && (
                          <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} size='' />
                          </a>
                        )}
                    </div>
                </div>
            ))}
            </div>
        </div>
    </section>
  )
}

export default Section2