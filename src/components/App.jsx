import React, {Component} from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';
import News from './News/News';
import Settings from './Settings/Settings';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Communication from "./Communication/Communication";

class App extends Component {
    constructor(props) {
        super(props);
        this.messages = props.AppState.messages;
        console.log(this.messages);
        this.names = props.AppState.names;
        this.posts = props.AppState.posts;
    }

    render() {
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <Header/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Route
                            exact
                            path='/profile'
                            render={(props) => <Profile {...props} posts={this.posts}/>}
                        />
                        <Route
                            exact
                            path='/'
                            render={(props) => <Profile {...props} posts={this.posts}/>}
                        />
                        <Route
                            path='/communication'
                            render={(props) => <Communication {...props} messages={this.messages} names={this.names} />}
                        />
                        <Route exact path='/news' component={News}/>
                        <Route exact path='/settings' component={Settings}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
