"use client";

import { notFound } from "next/navigation";
import { use } from "react";

import blogImage1 from "@/public/images/visionImage1.png";
import BlogLayout from "../BlogLayout";
import BlogPost from "@/components/BlogPage/BlogPost";

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
