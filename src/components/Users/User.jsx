import React from 'react';
import s from './users.module.css';

const User = (props) => {
    return (
        <div key={props.key}>
                <span>
                    <div>
                        <img src={props.photoUrl} className={s.userPhoto} width="200"/>
                    </div>
                    <div>
                        {props.following
                            ? <button onClick={() => props.unfollow(props.id)}>Unfollow</button>
                            : <button onClick={() => props.follow(props.id)}>Follow</button>}
                        </div>
                </span>
            <span>
                    <span>
                        <div>{props.fullName}</div>
                        <div>{props.status}</div>
                    </span>
                    <span>
                        <div>{props.country}</div>
                        <div>{props.city}</div>
                    </span>
                </span>
        </div>
    )
}

export default User;