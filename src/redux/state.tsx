import {RerenderTree} from "../render";



export type SideBarType = {

}
export type AddPostType = {
    text: string | void
    addPost:(postText:string) => void
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}
export type MyPostsType = {
    posts: Array<PostsType>
    addPost:(postText:string) => void
}
export type ProfilePageType = {
    posts: Array<PostsType>

}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
export type StateType = {
    ProfilePage: ProfilePageType
    DialogsPage: DialogsPageType
    SideBar: SideBarType
}
export type AppComponentType = {
    ProfilePage: ProfilePageType
    DialogsPage: DialogsPageType
    addPost:(postText:string) => void
}


let state = {
    ProfilePage: {
        posts : [
            {id: 1, message: 'Hi,how are you?', likesCount: 10},
            {id: 2, message: 'Hello!', likesCount: 20},
            {id: 3, message: 'Hey!', likesCount: 20}
        ]
    },
    DialogsPage: {
        dialogs : [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Sergei'},
            {id: 3, name: 'Sasha'},
            {id: 4, name: 'Valera'},
            {id: 5, name: 'Tom'}
        ],
        messages : [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello'},
            {id: 3, message: 'Hyo'},
            {id: 4, message: 'How are you'},
            {id: 5, message: 'Hey'}
        ]

    },
    SideBar:{}
}

export let addPost = (postText:string) => {
    let newPost = {
        id: new Date().getTime(),
        message: postText,
        likesCount: 0
    }
    state.ProfilePage.posts.push(newPost)
    RerenderTree(state)
}





export default state

