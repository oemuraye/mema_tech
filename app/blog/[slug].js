import { useRouter } from "next/router";
import Image from "next/image";
import blogImage1 from "@/public/images/visionImage1.png"; // Use your actual blog images

// Example blog data (use real data or fetch from an API/database)
const blogPosts = [
    {
      id: 1,
      title: "How to Support the Girl Child",
      content:
        "At MemaTech, we believe in creating tailored opportunities that empower girls, women, and small businesses to thrive in a tech-driven world. Through our two core initiatives—Karatu Girls and Masma Reach.",
      image: blogImage1,
      link: "/blog/support-girl-child",
      slug: 1,
    },
    {
      id: 2,
      title: "How to Support the Girl Child",
      content:
        "At MemaTech, we believe in creating tailored opportunities that empower girls, women, and small businesses to thrive in a tech-driven world. Through our two core initiatives—Karatu Girls and Masma Reach.",
      image: blogImage1,
      link: "/blog/support-girl-child",
      slug: 2,
    },
    {
      id: 3,
      title: "How to Support the Girl Child",
      content:
        "At MemaTech, we believe in creating tailored opportunities that empower girls, women, and small businesses to thrive in a tech-driven world. Through our two core initiatives—Karatu Girls and Masma Reach.",
      image: blogImage1,
      link: "/blog/support-girl-child",
      slug: 3,
    },
    {
      id: 4,
      title: "How to Support the Girl Child",
      content:
        "At MemaTech, we believe in creating tailored opportunities that empower girls, women, and small businesses to thrive in a tech-driven world. Through our two core initiatives—Karatu Girls and Masma Reach.",
      image: blogImage1,
      link: "/blog/support-girl-child",
      slug: 4,
    },
];



export async function getStaticPaths() {
  // Generate paths for each blog post
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths, // Paths to pre-render
    fallback: false, // If true, fallback pages are generated for unmatched routes
  };
}

export async function getStaticProps({ params }) {
  const blogPost = blogPosts.find((post) => post.slug === params.slug);

  return {
    props: { blogPost }, // Pass the blog post as a prop
  };
}


const BlogPost = () => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>; // Fallback content for incremental static generation (if fallback: true)
  }

 

  return (
    <section className="blog-post wrapper py-5">
      <div className="container">
        <Image src={post.image} alt={post.title} className="img-fluid" />
        <h1 className="mt-4">{post.title}</h1>
        <p className="mt-3">{post.content}</p>
      </div>
    </section>
  );
};

export default BlogPost;
