import React, {} from 'react';
import './App.css';
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Profile from "./components/profile/My posts/Post/ProfileInfo/profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import Settings from "./components/settings/settings";
import News from "./components/news/news";
import state, {addPost, AppComponentType, StateType} from "./redux/state";





const App = (props:AppComponentType) => {


  let addPost = props.addPost
  let posts = props.ProfilePage.posts
  let dialogs = props.DialogsPage.dialogs
  let messages = props.DialogsPage.messages

  return (
      <BrowserRouter>
        <div className="app-wrapper">
          <Header/>
          <Navbar/>
          <div className="app-wrapper-content">

            <Route path='/dialogs' render={ () => <Dialogs dialogs={dialogs} messages={messages} />}/>
            <Route path='/profile' render={ () => <Profile addPost={addPost} posts={posts} />}/>
            <Route path='/news' render={ () => <News/>}/>
            <Route path='/settings' render={ () => <Settings/>}/>
          </div>

        </div>
      </BrowserRouter>);
}

export default App;
