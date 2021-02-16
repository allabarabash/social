import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {
    const postsElements =
        props.posts.map( p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const newPostElement = React.createRef()

    const onAddPost = () => {
        // let text = newPostElement.current.value
        //props.dispatch(addPostActionCreator()) // components shouldnt know mush about logic and state
        props.addPost()
     }

    const onPostChange = ()  => {
        const text = newPostElement.current.value
        props.updateNewPostText(text)
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
                    <button onClick={ onAddPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;