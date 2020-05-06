import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div className={s.item}>
        <img src="https://www.paulseward.com/downloads/Avatars/cartoon_avatar.png" />
        {props.message}
        <div>
          <span>like</span>
        </div>
      </div>
    </div>
  );
};
export default Post;
