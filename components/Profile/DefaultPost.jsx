import React from 'react';
import s from './DefaultPost.module.css';

const DefaultPost= (props) => {
  console.log(props.message);
  return  (
    
      <div className={s.item}>
        <img src = 'https://sun9-23.userapi.com/c630626/v630626922/208be/Nu8J2XFkmxc.jpg' />
        {props.message}
        
        <div> 
          <span>{props.likes}</span>
        </div>
       
         </div>
      
        )
          }

         
  

export default DefaultPost;