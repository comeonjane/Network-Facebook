import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from "react-router-dom";
import News from './components/News/News';

const App = (props) => {

  

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
        <Route path='/dialogs' render ={ ()=><Dialogs 
       data1={props.state.messagePage}/>}/>
        
       {/* ArrayDialogs={props.appState.ArrayDialogs}
         ArrayMessages={props.appState.ArrayMessages}/>  } /> */}
        <Route path='/profile' render ={ ()=><Profile 
        data2={props.state.profilePage}
        addPost={props.addPost}
        UpdateNewPostText={props.UpdateNewPostText}
        />} />
        <Route path='/News' render ={ ()=><News/>} />
        
          {/* <Route path='/dialogs' component={Dialogs} />
          <Route path='/profile' component={Profile} />
          <Route path='/News' component={News} /> */}
          {/* <Route  path = '/profile'component={Profile} /> */}
        </div>
      </div>
    </BrowserRouter>)
}

export default App;