import React, {Component} from 'react'
import User from "./User";
import * as axios from "axios";
import userPhoto from "../../../src/assets/images/user.jpg"
import s from "./users.module.css"

class Users extends Component{

    componentDidMount() {
        if  (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                })
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        const usersToRender = this.props.users.map( u => <User key={u.id}
                                                          id={u.id}
                                                          name={u.name}
                                                          userPhoto={userPhoto}
                                                          photo={u.photos.small}
                                                          status={u.status}
                                                          country={"u.location.country"}
                                                          city={"u.location.city"}
                                                          followed={u.followed}
                                                          follow={this.props.follow}
                                                          unfollow={this.props.unfollow}
        />)

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        const pages = []
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div>
                <div>
                    {pages.map((p) => {
                        return <span
                            className={this.props.currentPage === p && s.selectedPage}
                            onClick={(e) => { this.onPageChanged(p) }}>{p}</span>
                    })}
                </div>
                <div>
                    {usersToRender}
                </div>
            </div>
        )
    }
}

export default Users