import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "./postSlice";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispath = useDispatch();

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);

  const onSavePost = () => {
    // addPost({
    //   id: nanoid(),
    //   title: title,
    //   content: content,
    // })
    if (title && content) {
      dispath(addPost(title, content));
    }
  };

  //  const canSave = Boolean(title) && Boolean(content);

  return (
    <section>
      <h2>Add a new Post</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="title">Post Title:</label>
        <input type="text" id="title" value={title} onChange={onTitleChange} />
        <label htmlFor="content">Post Content:</label>
        <textarea
          type="text"
          id="content"
          value={content}
          onChange={onContentChange}
        />
        <button type="submit" className="btn" onClick={onSavePost}>
          Add Post
        </button>
      </form>
    </section>
  );
};

export default AddPost;
