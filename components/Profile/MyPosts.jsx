import React from 'react';
import s from './MyPosts.module.css';
import DefaultPost from './DefaultPost';

const MyPosts = () => {
  let ArrayData = [
    {id:1, message:'Hi.How are you?', likescount: 15 + " " + "likes" },
    {id:2, message: 'Hi.How is she?', likescount:20 + " " + "likes"},
    {id:3, message: 'Hi.Where is she?', likescount:30 + " " + "likes"},
  ]

  let ArrayDataElements=ArrayData.map 
  (post=><DefaultPost message={post.message} likes={post.likescount} />)
  return (

    <React.Fragment> 
      <div className={s.postsBlock}>
        <h3>My posts</h3>
        </div>
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        {ArrayDataElements}
        {/* <DefaultPost message={ArrayData[0].message} likes={ArrayData[0].likescount} />
        <DefaultPost message={ArrayData[1].message} likes={ArrayData[1].likescount} /> */}
        
      </div>

    </React.Fragment>
  )
}




export default MyPosts;