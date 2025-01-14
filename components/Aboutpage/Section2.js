import React from 'react'
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

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
        linkedin: "https://linkedin.com/in/tryphena",
        instagram: "https://instagram.com/tryphena",
      },
    },
    {
      name: "Arome Ibrahim",
      position: "Lead - Operations",
      image: teamImg2,
      social: {
        linkedin: "https://linkedin.com/in/arome",
        instagram: "https://instagram.com/arome",
      },
    },
    {
      name: "Enoch Leonard Fwa",
      position: "Lead - Technology & Innovation",
      image: teamImg3,
      social: {},
    },
    {
      name: "Lovina Ihotu OGIDI",
      position: "Lead - Legal & Compliance",
      image: teamImg4,
      social: {},
    },
    {
      name: "Suleiman Nabagi",
      position: "Creative Director",
      image: teamImg5,
      social: {},
    },
    {
      name: "Ojonoka Itodo",
      position: "Monitoring and Evaluation Officer",
      image: teamImg6,
      social: {},
    },
    {
      name: "Chinazor Umeakuka",
      position: "Community Manager",
      image: teamImg7,
      social: {},
    },
    {
      name: "Joseph Yaba",
      position: "Advisory Board - AUECOSOC",
      image: teamImg8,
      social: {},
    },
];

const mentorMembers = [
    {
      name: "Tryphena Ene Ojile",
      image: mentorImg1,
    },
    {
      name: "Arome Ibrahim",
      image: mentorImg2,
    },
    {
      name: "Enoch Leonard Fwa",
      image: mentorImg3,
    },
    {
      name: "Lovina Ihotu OGIDI",
      image: mentorImg4,
    },
    {
      name: "Suleiman Nabagi",
      image: mentorImg5,
    },
    {
      name: "Ojonoka Itodo",
      image: mentorImg6,
    },
];




const Section2 = () => {
  return (
    <section className='team-section wrapper'>
        <div className="executive-team">
            <h2 className='text-center my-5'>OUR EXECUTIVE TEAM</h2>

            <div className="team-members d-flex flex-wrap">
            {teamMembers.map((member, index) => (
                <div key={index} className="team-member text-center mb-4 m-auto">
                    <Image src={member.image} alt={member.name} className="rounded-circle mb-1" 
                        width={240} height={240}
                    />
                    <h5 className='mb-0'>{member.name}</h5>
                    <p className='mb-0'>{member.position}</p>
                    <div className="social-icons d-flex justify-content-center gap-4">
                        {member.social.linkedin && (
                            <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram}  />
                            </a>
                        )}
                        {member.social.instagram && (
                            <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedinIn}  />
                            </a>
                        )}
                    </div>
                </div>
            ))}
            </div>
        </div>

        <div className="mentor-team mt-5 py-5">
            <h2 className='text-center my-5'>MENTORS & VOLUNTEERS</h2>

            <div className="team-members d-flex flex-wrap">
            {mentorMembers.map((member, index) => (
                <div key={index} className="team-member text-center mb-4 m-auto">
                    <Image src={member.image} alt={member.name} className="rounded-circle mb-1" 
                        width={240} height={240}
                    />
                    <h5 className='mb-0'>{member.name}</h5>
                </div>
            ))}
            </div>
        </div>
    </section>
  )
}

export default Section2