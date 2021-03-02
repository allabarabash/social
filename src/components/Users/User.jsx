import React from 'react';
import s from './users.module.css';
import {NavLink} from "react-router-dom";
import * as axios from "axios";

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
                            ? <button onClick={() => {

                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '15c03332-b7d8-40ce-9da8-3df65698dfcb'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(props.id) // dispatch into reducer
                                        }
                                    })
                                    .then(console.log('Not following'))

                            }}>Unfollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '15c03332-b7d8-40ce-9da8-3df65698dfcb'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(props.id) // dispatch into reducer
                                        }
                                    })
                                    .then(console.log('Following'))



                            }}>Follow</button>}
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