import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";

const PostsList = () => {
    const posts = useSelector(selectAllPosts);

    const renderPosts = posts.map(post => (
        <article key={post.id} className="border m-2 p-2 w-auto">
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 50)}</p>
        </article>
    ));

    return (
        <section>
            <h2>Post</h2>
            <div>{renderPosts}</div>
        </section>
    )
}

export default PostsList