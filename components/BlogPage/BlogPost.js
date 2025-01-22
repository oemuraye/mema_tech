import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
const BlogPost = ({ blogPost }) => {
  return (
    <section className="blog-post wrapper py-5">
        <div className="container">
            <button onClick={() => window.history.back()} className="btn join-btn outline-btn mb-3 py-2 px-4">
                <FontAwesomeIcon icon={faAngleLeft} /> Back
            </button>
            <div className="d-flex justify-content-center">
                <Image src={blogPost.image} alt={blogPost.title} className="img-fluid" style={{ maxHeight: "330px" }}/>
                </div>
                <h1 className="mt-4">{blogPost.title}</h1>
                <p className="mt-3">{blogPost.content}</p>
            </div>
    </section>
  )
}

export default BlogPost