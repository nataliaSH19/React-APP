import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostCreator, updateNewPostTextCreator } from "../../../Redux/State";




const MyPosts = (props) => {
  let postsElement = props.posts
    .map(p => <Post message={p.message} likeCount={p.likeCount} />)


  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    //props.updateNewPostText(text);
    // let action = ({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
    let action = updateNewPostTextCreator(text);
    props.dispatch(action);
  }

  return (
    <div className={s.posts}>
      <h2>My Posts</h2>
      <div className={[s.form]}>
        <textarea onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText} />
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElement}
      </div>
    </div>
  );
};
export default MyPosts;
