import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <h2>{props.profile.fullName}</h2>
                {props.profile.lookingForAJob ? <span>looking for a job! </span> : <span>not looking for a job!</span>}
                <p>{props.profile.lookingForAJobDescription}</p>
            </div>
            <div>
                {props.profile.contacts.github} <br/>
                {props.profile.contacts.vk} <br/>
                {props.profile.contacts.facebook} <br/>
                {props.profile.contacts.instagram} <br/>
                {props.profile.contacts.twitter} <br/>
                {props.profile.contacts.website} <br/>
                {props.profile.contacts.youtube} <br/>
                {props.profile.contacts.mainLink} <br/>

            </div>
        </div>
    )
}

export default ProfileInfo;