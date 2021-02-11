import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    const postsElements =
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>)

    const newPostElement = React.createRef()

    const addPost = () => {
        let text = newPostElement.current.value
        props.addPost()
    }

    const onPostChange = () => {
        const text = newPostElement.current.value
        props.updateNewPostText(text)
        // console.log(props.newPostText)
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