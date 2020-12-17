import React from "react";
import s from './Myposts.module.css';
import Post from "./Post/Post";
import state, {AddPostType, AppComponentType, MyPostsType, PostsType, ProfilePageType} from "../../../redux/state";
import {type} from "os";




const MyPosts = (props:MyPostsType) => {
    let post =props.posts
    let postsElements = post.map (p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/> )
    let newPostElement = React.createRef<HTMLTextAreaElement>()

     let addPost = () => {


           props.addPost(newPostElement.current ? newPostElement.current.value : '')
   }

    return <div className={s.content}>

        <div className={s.postBlock}>
            My posts
        </div>
        <div>
            <textarea ref={newPostElement}></textarea>
        </div>
        <div>
            <button onClick={addPost}>Add post</button>
        </div>

        <div className={s.posts}>
            {postsElements}
        </div>
    </div>

}
export default MyPosts;