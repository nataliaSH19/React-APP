import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={s.profileInfo}>
            <div className={s.headerImage}>
                <img src="https://image.shutterstock.com/image-photo/portrait-surprised-cat-scottish-straight-260nw-499196506.jpg" />
            </div >
            <div className={s.infoText}>
                someText
                </div>
        </div>
    );
};

export default ProfileInfo;