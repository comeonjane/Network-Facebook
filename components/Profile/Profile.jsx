import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts';
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {

  //  let ArrayData = [
  //   {id:1, message:'Hi.How are you?', likescount: 15 + " " + "likes" },
  //   {id:2, message: 'Hi.How is she?', likescount:20 + " " + "likes"},
  //   {id:3, message: 'Hi.Where is she?', likescount:30 + " " + "likes"},
  // ]
  return (<div>
    <ProfileInfo />
    < MyPosts posts={props.data2.posts} 
    newPostText={props.data2.newPostText}
    addPost={props.addPost}
    UpdateNewPostText={props.UpdateNewPostText}
    />
     {/* //ArrayData={ArrayData}// */}

  </div>
  )

}


export default Profile;