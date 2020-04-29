import React from 'react';
import s from './ProfileInfo.module.css';
import MyPosts from './MyPosts';

const ProfileInfo = () => {
    return (<div>

        <div> <img src='https://avatars.mds.yandex.net/get-pdb/2304766/d2c7503f-0772-445d-a105-ed6b1cbe4065/s1200' />
        </div>
        <div className={s.descriptionBlock}>
            ava+descriptions 
           
        </div>
    </div>
    )

}


export default ProfileInfo;