import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import PostTime from "./PostTime";

const PostsList = () => {
    const posts = useSelector(selectAllPosts);

    const sortedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderPosts = sortedPosts.map(post => (
        <article key={post.id} className="border m-2 p-2 w-auto">
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 50)}</p>
            <PostTime timestamp={post.date} />
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