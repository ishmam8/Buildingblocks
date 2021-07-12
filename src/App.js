import React, { Component } from "react";
import "./components/css/App.css";
import Landing from "./components/Landing";
import Error from "./components/Error";
import Login from "./components/Login";
import { Route, Switch } from "react-router-dom";
import Choice from "./components/Choice";
import LoginWithEmail from './components/LoginWithEmail';
import SignupWithEmail from './components/SignupWithEmail';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Chat from './components/Chat';
import Join from './components/Join';
import OuterChatContainer from './components/OuterChatContainer';
import EditProfile from "./components/EditProfile";
import Team from "./components/Team";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import MasterNavbar from "./components/MasterNavbar";

class App extends Component {
    state = {
        profiles: null,
        userInfo: null
    };
// hmm
    render() {
        const App = () => (
            <div>
                <MasterNavbar/>
                <Switch>

                    <Route path="/" exact component={Landing}/>
                    <Route path="/choice" render={() => <Choice profiles={this.state.profiles} />}/>
                    <Route path="/login-email" render={() => <LoginWithEmail profiles={this.state.profiles}/>}/>
                    <Route path="/login-social" render={() => <LoginWithSocial profiles={this.state.profiles}/>}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/signupWithEmail" component={SignupWithEmail}/>
                    <Route path="/theChat" component={Chat}/>
                    <Route path="/join" component={Join}/>
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/chatRoom" component={OuterChatContainer} />
                    <Route path="/editProfile" component={EditProfile} />
                    <Route path="*" component={Error} />
                </Switch>
            </div>
        );
        return (
            <Switch>
                <App/>
            </Switch>
        );
    }

  state = {
    profiles: null,
    userInfo: null,
  };
  // hmm
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route
            path="/choice"
            render={() => <Choice profiles={this.state.profiles} />}
          />
          <Route
            path="/login"
            render={() => <LoginWithEmail profiles={this.state.profiles} />}
          />
          <Route path="/signup" component={Signup}/>
          <Route path="/signupWithEmail" component={SignupWithEmail}/>
          <Route path="/team" component={Team} />
          <Route path="/theChat" component={Chat} />
          <Route path="/join" component={Join} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/chatRoom" component={OuterChatContainer} />
          <Route path="/editProfile" component={EditProfile} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/contactUs" exact component={ContactUs} />
          <Route path="*" component={Error} />
        </Switch>
      </div>
    );
    return (
      <Switch>
        <App />
      </Switch>
    );
  }
}

export default App;
