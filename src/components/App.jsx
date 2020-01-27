import React, {Component} from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';
import News from './News/News';
import Settings from './Settings/Settings';
import './App.css';
import { Route } from 'react-router-dom';
import Communication from "./Communication/Communication";

class App extends Component {
    constructor(props) {
        super(props);
        this.profilePage = props.state.profilePage;
        this.communication = props.state.communication;
        this.addPost = props.addPost;
        this.changeValue = props.changeValue;
    }

    render() {
        return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">

                    <Route
                        exact
                        path='/profile'
                        render={(props) => <Profile {...props} profilePage={this.profilePage} addPost={this.addPost} changeValue={this.changeValue} />}
                    />
                    {/*<Route*/}
                    {/*    exact*/}
                    {/*    path='/'*/}
                    {/*    render={(props) => <Profile {...props} profilePage={this.profilePage} addPost={this.addPost} changeValue={this.changeValue} />}*/}
                    {/*/>*/}
                    <Route
                        path='/communication'
                        render={(props) => <Communication {...props} communication={this.communication} />}
                    />
                    <Route exact path='/news' component={News}/>
                    <Route exact path='/settings' component={Settings}/>
                </div>
            </div>
        );
    }
}

export default App;
