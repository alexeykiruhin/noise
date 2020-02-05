import React, {Component} from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import './App.css';
import { Route } from 'react-router-dom';
import Communication from "./components/Communication/Communication";

class App extends Component {
    constructor(props) {
        super(props);
        console.log(props.state);
        this.profilePage = props.state.profilePage;
        this.communication = props.state.communication;
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
                        render={(props) =>
                            <Profile {...props} profilePage={this.profilePage}
                                                    addPost={this.props.addPost}
                                                    changeNewPostText={this.props.changeNewPostText} />
                        }
                    />
                    <Route
                        path='/communication'
                        render={(props) =>
                            <Communication {...props} communication={this.communication} />
                        }
                    />
                    <Route exact path='/news' component={News}/>
                    <Route exact path='/settings' component={Settings}/>
                </div>
            </div>
        );
    }
}

export default App;
