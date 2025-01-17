import Image from "next/image";
import Link from "next/link";

import blogImage1 from "@/public/images/visionImage1.png";

import './styles.css'



const blogPosts = [
    {
      title: "How to Support the Girl Child",
      content:
        "At MemaTech, we believe in creating tailored opportunities that empower girls, women, and small businesses to thrive in a tech-driven world. Through our two core initiatives—Karatu Girls and Masma Reach.",
      image: blogImage1,
      link: "/blog/support-girl-child",
    },
    {
      title: "How to Support the Girl Child",
      content:
        "At MemaTech, we believe in creating tailored opportunities that empower girls, women, and small businesses to thrive in a tech-driven world. Through our two core initiatives—Karatu Girls and Masma Reach.",
      image: blogImage1,
      link: "/blog/support-girl-child",
    },
    {
      title: "How to Support the Girl Child",
      content:
        "At MemaTech, we believe in creating tailored opportunities that empower girls, women, and small businesses to thrive in a tech-driven world. Through our two core initiatives—Karatu Girls and Masma Reach.",
      image: blogImage1,
      link: "/blog/support-girl-child",
    },
    {
      title: "How to Support the Girl Child",
      content:
        "At MemaTech, we believe in creating tailored opportunities that empower girls, women, and small businesses to thrive in a tech-driven world. Through our two core initiatives—Karatu Girls and Masma Reach.",
      image: blogImage1,
      link: "/blog/support-girl-child",
    },
  ];

const Section1 = () => {
  return (
    <section className='blog_page-section1 wrapper padding_y-spacing'>
        <article className="page-section1 hero container">
            <h2 className="text-md-center text-sm-start">BLOGS POST</h2>
            <p className="text-md-center text-sm-start">Empowering young minds, one story at a time. Explore our blog for inspiring tales and educational content that supports the growth and development of the girl child. From stories of overcoming obstacles to tips on building confidence and self-esteem, our blog is a resource for girls to learn, grow, and thrive.</p>
        </article>

        <section className="blog_posts-section padding_y-spacing">
            <div className="row">
            {blogPosts.map((post, index) => (
                <div key={index} className="col-md-6 col-sm-12 mb-4">
                    <div className="blog-card p-3">
                        <Image src={post.image} alt={post.title} className="card-img-top " height='330px' />
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.content}</p>
                            <Link href={post.link} className="btn btn-primary mt-3">
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </section>
    </section>
  )
}

export default Section1