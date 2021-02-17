import React from 'react'
import preloader from "../../../assets/images/loader.svg";

const Preloader = (props) => {
    return (
        <div>
            <img src={preloader} style={{backgroundColor: 'pink'}} />
        </div>
    )
}

export default Preloader