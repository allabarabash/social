import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {
    const postsElements =
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>)

    const newPostElement = React.createRef()

    const addPost = () => {
        // let text = newPostElement.current.value
        // props.addPost()
        props.dispatch(addPostActionCreator())
    }

    const onPostChange = () => {
        const text = newPostElement.current.value
        // const action = { type: 'UPDATE-NEW-POST-TEXT', newText: text }
        const action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}
                              onChange={onPostChange}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;