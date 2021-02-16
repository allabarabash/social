import React from 'react'
import User from "./User";

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://img02.rl0.ru/71291dce2d3bf8099deb188d42af1670/c615x400i/https/news.rambler.ru/img/2019/07/06130125.067177.4444.jpeg',
                following: false,
                fullName: 'Dmytry N',
                status: 'Hi! I\'m using your socila network',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://img.gazeta.ru/files3/471/13357471/RIAN_5721220.HR-pic4_zoom-1500x1500-91725.jpg',
                following: true,
                fullName: 'Sergey',
                status: 'Hi!',
                location: {city: 'Tver', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://files.vm.ru/photo/vecherka/2019/04/doc752ae8puidzpym3snug_800_480.jpg',
                following: false,
                fullName: 'Britney',
                status: 'Oops! I did it again',
                location: {city: 'LA', country: 'USA'}
            },
            {
                id: 4,
                photoUrl: 'http://aisvip-a.akamaihd.net/masters/1086226/die-backstreet-boys-beim-103-5-ktu-s-ktuphoria-im-juni-2018-in-wantagh-city.jpg',
                following: false,
                fullName: 'Backstreet Boys',
                status: 'Everybody! Yeeeah',
                location: {city: 'Los Angeles', country: 'USA'}
            },

        ])

    }
    const usersToRender = props.users.map( u => <User key={u.id}
                                                      id={u.id}
                                                      fullName={u.fullName}
                                                      photoUrl={u.photoUrl}
                                                      status={u.status}
                                                      country={u.location.country}
                                                      city={u.location.city}
                                                      following={u.following}
                                                      follow={props.follow}
                                                      unfollow={props.unfollow}
    />)

    return (<div>{usersToRender}</div>)
}

export default Users