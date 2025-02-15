import { useParams } from "react-router-dom";
import blogsData from "../data";

const SinglePost = () => {
  const { postId } = useParams();
  const blog = blogsData.find((post) => post.id.toString() === postId);

  if (!blog) {
    return <h2>Post Not Found</h2>;
  }

  return (
    <section className="single-blog">
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </section>
  );
};

export default SinglePost;
