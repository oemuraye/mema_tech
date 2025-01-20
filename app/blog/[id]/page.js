"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { use } from "react";

import blogImage1 from "@/public/images/visionImage1.png";
import BlogLayout from "../BlogLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const blogPosts = [
  {
    id: "1",
    title: "How to Support the Girl Child",
    content:
      "At MemaTech, we believe in creating tailored opportunities that empower girls, women, and small businesses to thrive in a tech-driven world. Through our two core initiatives—Karatu Girls and Masma Reach.",
    image: blogImage1,
    link: "/blog/support-girl-child",
  },
  {
    id: "2",
    title: "How to Support the Girl Child",
    content:
      "At MemaTech, we believe in creating tailored opportunities that empower girls, women, and small businesses to thrive in a tech-driven world. Through our two core initiatives—Karatu Girls and Masma Reach.",
    image: blogImage1,
    link: "/blog/support-girl-child",
  },
  {
    id: "3",
    title: "How to Support the Girl Child",
    content:
      "At MemaTech, we believe in creating tailored opportunities that empower girls, women, and small businesses to thrive in a tech-driven world. Through our two core initiatives—Karatu Girls and Masma Reach.",
    image: blogImage1,
    link: "/blog/support-girl-child",
  },
  {
    id: "4",
    title: "How to Support the Girl Child",
    content:
      "At MemaTech, we believe in creating tailored opportunities that empower girls, women, and small businesses to thrive in a tech-driven world. Through our two core initiatives—Karatu Girls and Masma Reach.",
    image: blogImage1,
    link: "/blog/support-girl-child",
  },
];

export default function BlogPostPage({ params }) {
  // Unwrap the params Promise with `use`
  const { id } = use(params);

  // Find the blog post by ID
  const blogPost = blogPosts.find((post) => post.id === id);

  if (!blogPost) {
    notFound(); // Show the 404 page if the post is not found
  }

  return (
    <BlogLayout>
      <section className="blog-post wrapper py-5">
        <div className="container">
        <button onClick={() => window.history.back()} className="btn join-btn outline-btn mb-3 py-2 px-4">
          <FontAwesomeIcon icon={faAngleLeft} /> Back
        </button>
          <div className="d-flex justify-content-center">
            <Image src={blogPost.image} alt={blogPost.title} className="img-fluid" />
          </div>
          <h1 className="mt-4">{blogPost.title}</h1>
          <p className="mt-3">{blogPost.content}</p>
        </div>
      </section>
    </BlogLayout>
  );
}
