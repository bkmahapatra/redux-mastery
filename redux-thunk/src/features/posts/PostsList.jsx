import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, getPostsError, getPostsStatus, selectedPosts } from "./postsSlice";
import { useEffect } from "react";

const PostsList = () => {
    const posts = useSelector(selectedPosts);
    const status = useSelector(getPostsStatus)
    const error = useSelector(getPostsError);

    console.log({ posts })

    const dispatch = useDispatch();

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchPosts())
        }
    }, [status, dispatch])

    // const sortedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderPosts = posts.map(post => (
        <article key={post.id} className="border m-2 p-2 w-auto">
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 50)}</p>
            {/* <PostTime timestamp={post.date} /> */}
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