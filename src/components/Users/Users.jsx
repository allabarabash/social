import React from 'react'
import s from "./users.module.css";
import User from "./User";
import userPhoto from "../../assets/images/user.jpg";

const Users = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i)
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
            <div>
                {pages.map((p) => {
                    return <span
                        className={props.currentPage === p && s.selectedPage}
                        onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
                })}
            </div>
            <div>
                {usersToRender}
            </div>
        </div>
    )
}

export default Users