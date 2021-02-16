import React from 'react'
import User from "./User";
import * as axios from "axios";
import userPhoto from "../../../src/assets/images/user.jpg"

const Users = (props) => {

    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data.items)
                })
        }
    }


    const usersToRender = props.users.map( u => <User key={u.id}
                                                      id={u.id}
                                                      name={u.name}
                                                      userPhoto={userPhoto}
                                                      photo={u.photos.small}
                                                      status={u.status}
                                                      country={"u.location.country"}
                                                      city={"u.location.city"}
                                                      followed={u.followed}
                                                      follow={props.follow}
                                                      unfollow={props.unfollow}
    />)

    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            <div>
                {usersToRender}
            </div>
        </div>)
}

export default Users