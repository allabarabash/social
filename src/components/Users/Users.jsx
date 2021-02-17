import React, {Component} from 'react'
import User from "./User";
import * as axios from "axios";
import userPhoto from "../../../src/assets/images/user.jpg"

class Users extends Component{

    constructor(props) {
        super(props)
        if  (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
        }


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
        return (
            <div>
                <div>
                    {usersToRender}
                </div>
            </div>
        )
    }
}

export default Users