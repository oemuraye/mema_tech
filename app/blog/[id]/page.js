"use client";

import { notFound } from "next/navigation";
import { use } from "react";

import blogImage1 from "@/public/images/visionImage1.png";
import BlogLayout from "../BlogLayout";
import BlogPost from "@/components/BlogPage/BlogPost";

const blogPosts = [
  {
    id: "1",
    title: "Introducing the Karatu Girls Initiative: Empowering the Next Generation of Female Tech Leaders",
    content: `
      <p>At Mematech, we are committed to bridging the digital divide and fostering inclusivity in the technology sector.
        As part of our efforts, we are proud to introduce the Karatu Girls initiative, a key program designed to introduce 
        secondary school girls in Nigeria to the transformative power of technology.
      </p>
      
      <h3>Our Mission</h3>
      <p>
        The Karatu Girls initiative is built on the belief that every girl deserves the opportunity to succeed in the tech industry. 
        Our mission is to inspire the next generation of female tech leaders by providing practical training and exposure to real-world opportunities. 
        We aim to equip these young women with the skills, knowledge, and confidence to pursue careers in technology and become leaders in their communities.
      </p>

      <h3>The Girls in Tech Event: A Key Milestone</h3>
      <p>
        The recent Girls in Tech event, held in Jos, Plateau State, Nigeria, was a key milestone in the Karatu Girls initiative. 
        The event brought together high school girls from Sunnah Community Private School, Agwan Rimi, for a transformative three-day experience. 
        The program featured a series of motivational talks, hands-on workshops, and immersive experiences, including virtual reality sessions, data analytics, and graphic design.
      </p>

      <h3>Empowering Young Women through Technology</h3>
      <p>
        The Karatu Girls initiative is designed to address the significant gap in technology education and career opportunities for girls in Nigeria. 
        By providing practical training and exposure to real-world opportunities, we aim to empower these young women to become the next generation of tech leaders.
      </p>

      <h3>Our Goals</h3>
      <ul>
        <li>To introduce secondary school girls in Nigeria to the transformative power of technology</li>
        <li>To provide practical training and exposure to real-world opportunities in the tech industry</li>
        <li>To inspire the next generation of female tech leaders and promote diversity in the tech sector</li>
        <li>To build a community of young women who are passionate about technology and committed to making a positive impact in their communities</li>
      </ul>

      <h3>Join Us</h3>
      <p>
        We invite you to join us on this exciting journey to empower the next generation of female tech leaders. Together, we can make a difference and create a brighter, 
        more inclusive future for all. Whether you are a student, educator, or industry professional, we encourage you to get involved and support the Karatu Girls initiative.
      </p>
    `,
    image: blogImage1,
    link: "/blog/karatu-girls-initiative",
  },
  {
    id: "2",
    title: "Empowering Young Women in Tech: The Girls in Tech Initiative",
    content: `
      <p>
        Mematech, a leading tech organization, launched the Girls in Tech: Explore, Engage, Empower initiative to bridge the digital divide 
        and foster inclusivity in the technology sector. The program, held in Jos, Plateau State, Nigeria, from November 28-30, 2024, brought together high school girls 
        from Sunnah Community Private School, Agwan Rimi, for a transformative three-day experience.
      </p>

      <h3>Key Highlights</h3>
      <ul>
        <li><strong>Day 1:</strong> Inspirational keynote address by Tryphena Ojile, Executive Director of Mematech, and a session on cybersecurity by Joyce Pede</li>
        <li><strong>Day 2:</strong> Hands-on breakout sessions on data analytics and graphic design, and a virtual reality experience facilitated by Immersive Tech Africa</li>
        <li><strong>Day 3:</strong> Interactive sessions, a panel discussion, and a fun-filled VR experience at N-hub, a renowned technology hub in Jos</li>
      </ul>

      <h3>Impact and Future Plans</h3>
      <p>
        The initiative successfully set the stage for bridging the digital divide and fostering inclusivity in the technology sector. 
        Mematech plans to expand the initiative to other regions across Nigeria, ensuring that more girls gain access to these transformative opportunities. 
        Future engagements will include follow-up sessions, collaborative projects, and partnerships with schools, tech hubs, and organizations to sustain the program's impact.
      </p>

      <h3>Conclusion</h3>
      <p>
        The Girls in Tech: Explore, Engage, Empower initiative marks the beginning of a promising journey, planting the seeds for a future 
        where empowered, tech-savvy young women rise to shape and impact the world. By providing young women with the skills, knowledge, and confidence 
        to succeed in the tech industry, we are creating a brighter, more inclusive future – one girl at a time.
      </p>
    `,
    image: blogImage1,
    link: "/blog/girls-in-tech-initiative",
  },
];

export default function BlogPostPage({ params }) {
  const { id } = use(params);

  const blogPost = blogPosts.find((post) => post.id === id);

  if (!blogPost) {
    notFound();
  }

  return (
    <BlogLayout>
      <BlogPost blogPost={blogPost} />
    </BlogLayout>
  );
}
