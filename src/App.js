// src/App.js
import React from 'react';
import './App.css';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

function App() {
  const [loggedInUser, setLoggedInUser] = React.useState(null);

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          {loggedInUser ? (
            <Redirect to={`/home/${loggedInUser}`} />
          ) : (
            <Login onLogin={handleLogin} />
          )}
        </Route>
        <Route path="/home/:username">
          {loggedInUser ? <Home /> : <Redirect to="/" />}
        </Route>
        <Route path="/signup">
          <Signup onSignin={handleLogin} />
        </Route>
      </div>
    </Router>
  );
}

export default App;
