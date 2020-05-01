import React from 'react';
import s from './MyPosts.module.css';
import DefaultPost from './DefaultPost';

const MyPosts = (props) => {
  // let posts = [
  //   {id:1, message:'Hi.How are you?', likescount: 15 + " " + "likes" },
  //   {id:2, message: 'Hi.How is she?', likescount:20 + " " + "likes"},
  //   {id:3, message: 'Hi.Where is she?', likescount:30 + " " + "likes"},
  // ]
  
  let ArrayDataElements = props.posts.map
    (post => <DefaultPost message={post.message} likes={post.likescount} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    
    props.addPost();
    
  }
let onPostChange=()=>{
  let text = newPostElement.current.value;
  props.UpdateNewPostText(text);

}
  return (
<>
    <div className={s.postsBlock}>
      <h3>My posts</h3>
    </div>
    <div>
      <textarea onChange ={onPostChange} ref={newPostElement} value={props.newPostText}/>
    </div> 
    <div>
      <button onClick={addPost}>Addpost</button>
    </div>
    <div className={s.posts}>
      {ArrayDataElements} </div>  
      </>) 
      
}
     
      
export default MyPosts;
