import React from 'react';
import s from './users.module.css';
import {NavLink} from "react-router-dom";

const User = (props) => {
    return (
        <div id={props.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + props.id}>
                            <img src={props.photo != null ? props.photo : props.userPhoto}
                             className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {props.followed
                            ? <button onClick={() => props.unfollow(props.id)}>Unfollow</button>
                            : <button onClick={() => props.follow(props.id)}>Follow</button>}
                        </div>
                </span>
            <span>
                    <span>
                        <div>{props.name}</div>
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