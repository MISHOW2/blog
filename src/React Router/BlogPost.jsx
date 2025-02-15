import { Link } from "react-router-dom";
import "../App.css";
import blogsData from "../data";

const BlogPosts = () => {
  return (
    <section className="blogs">
      <h1>Blog Posts</h1>
      {blogsData.map((blog) => (
        <article key={blog.id} className="blog-post">
          <h2>{blog.title}</h2>
          <p>{blog.excerpt}</p>
          <Link to={`/posts/${blog.id}`}>
            <button>Read More</button>
          </Link>
        </article>
      ))}
    </section>
  );
};

export default BlogPosts;
