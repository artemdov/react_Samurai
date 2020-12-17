import React from "react";
import s from './profile.module.css';
import MyPosts from "../../Myposts";
import {addPost, MyPostsType, ProfilePageType} from "../../../../../redux/state";
import {AppComponentType} from "../../../../../redux/state";




const Profile = (props:MyPostsType) => {
    return <div className={s.content}>
        <div>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh0GZaLs7O6zEDPiY4zVVOiGmb2dxEXj4fDQ&usqp=CAU"/>
        </div>
        <div className={s.profileBlock}>
            Ava
        </div>

        <MyPosts posts={props.posts} addPost={props.addPost} />
    </div>

}
export default Profile